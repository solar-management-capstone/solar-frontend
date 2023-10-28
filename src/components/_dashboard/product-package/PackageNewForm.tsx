/* eslint-disable */
import * as Yup from 'yup';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack5';
import { useNavigate } from 'react-router-dom';
import { Form, FormikProvider, useFormik } from 'formik';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

// material
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Icon } from '@iconify/react';
import { DesktopDatePicker, LoadingButton } from '@material-ui/lab';
import {
  Box,
  Card,
  Checkbox,
  Grid,
  Stack,
  TextField,
  FormControlLabel,
  InputAdornment,
  IconButton,
  MenuItem
} from '@material-ui/core';
import useAuth from 'hooks/useAuth';
import axios from 'utils/axiosIntegrated';
import { PATH_DASHBOARD } from 'routes/paths';
import { AuthUser } from '../../../@types/authentication';
import { PackageManager } from '../../../@types/package';
import { PromotionManager } from '../../../@types/promotion';
import ProductPackage, { AvailableProductsProps } from './components/ProductPackage';
// import { roles, genders, loginTypes } from './roles';

// ----------------------------------------------------------------------

type PackageNewFormProps = {
  isEdit: boolean;
  currentPackage?: PackageManager;
  promotionList?: Partial<PromotionManager[]>;
  isDisabled?: boolean;
};

interface ProductList {
  productId: string;
  quantity: number;
}

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export default function PackageNewForm({
  isEdit = false,
  currentPackage,
  promotionList,
  isDisabled = false
}: PackageNewFormProps) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const NewPackageSchema = Yup.object().shape({
    packageId: Yup.string(),
    name: Yup.string().required('Tên gói sản phẩm là bắt buộc'),
    description: Yup.string().required('Mô tả là bắt buộc')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      packageId: currentPackage?.packageId || 'default',
      name: currentPackage?.name || '',
      description: currentPackage?.description || '',
      amount: currentPackage?.promotion?.amount || 0,
      promotionId: currentPackage?.promotionId || null,
      listProduct: currentPackage?.packageProduct || []
    },
    validationSchema: NewPackageSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        if (isEdit) {
          await axios.put('api/Package/update-Package', {
            packageId: values?.packageId,
            name: values?.name,
            description: values?.description,
            ...(values?.promotionId &&
              values?.promotionId !== 'NOPROMOTION' && { promotionId: values?.promotionId }),
            isDisablePromotion: values?.promotionId === 'NOPROMOTION'
          });

          await axios.post('api/Package/Insert-product-package', {
            packageId: values?.packageId,
            listProduct: values.listProduct.map((product: any) => ({
              productId: product.productId,
              quantity: product.quantity
            }))
          });
        } else {
          await axios.post('api/Package/Insert-Package', {
            name: values?.name,
            description: values?.description,
            ...(values?.promotionId &&
              values?.promotionId !== 'NOPROMOTION' && { promotionId: values?.promotionId }),
            isDisablePromotion: values?.promotionId === 'NOPROMOTION'
          });
        }
        resetForm();
        setSubmitting(false);
        enqueueSnackbar(
          !isEdit ? 'Tạo gói sản phẩm thành công' : 'Cập nhật gói sản phẩm thành công',
          {
            variant: 'success'
          }
        );
        navigate(PATH_DASHBOARD.package.list);
      } catch (error: any) {
        console.error(error);
        setSubmitting(false);
        setErrors(error);
      }
    }
  });

  const {
    errors,
    values,
    touched,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    getFieldProps,
    setFieldTouched
  } = formik;

  const handleSetProductList = (productList: AvailableProductsProps[]) => {
    setFieldValue('listProduct', productList);
  };
  console.log(errors);
  console.log(values);

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    disabled={isDisabled}
                    label="Tên gói sản phẩm"
                    {...getFieldProps('name')}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    disabled={isDisabled}
                    multiline
                    rows={4}
                    label="Mô tả"
                    {...getFieldProps('description')}
                    error={Boolean(touched.description && errors.description)}
                    helperText={touched.description && errors.description}
                  />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    select
                    fullWidth
                    label="Select"
                    {...getFieldProps('promotionId')}
                    error={Boolean(touched.description && errors.description)}
                    helperText={touched.description && errors.description}
                  >
                    <MenuItem
                      key="NOPROMOTION"
                      value="NOPROMOTION"
                      onClick={() => setFieldValue('amount', 0)}
                    >
                      Không
                    </MenuItem>
                    {promotionList &&
                      promotionList.length > 0 &&
                      promotionList.map((promotion) => (
                        <MenuItem
                          key={promotion?.promotionId}
                          value={promotion?.promotionId}
                          onClick={() => setFieldValue('amount', promotion?.amount)}
                        >
                          {promotion?.promotionId} | {promotion?.title} | Giảm {promotion?.amount}%
                        </MenuItem>
                      ))}
                  </TextField>
                </Stack>

                {isEdit && currentPackage && (
                  <Stack>
                    <ProductPackage
                      currentPackage={currentPackage}
                      promotion={{
                        promotionId: values.promotionId,
                        amount: Number(values?.amount) || 0
                      }}
                      onSetProductList={handleSetProductList}
                    />
                  </Stack>
                )}

                {!isDisabled && (
                  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                    <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                      {!isEdit ? 'Tạo gói sản phẩm' : 'Cập nhật'}
                    </LoadingButton>
                  </Box>
                )}
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}