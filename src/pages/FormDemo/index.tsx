import { Formik, Form } from 'formik'
import { createYupSchema } from '../../helpers/createYupSchema'
import formDemoJson from '../../public/default-config/form-demo.json'
import * as Yup from 'yup'

const FormDemo = () => {
  const yupSchema = formDemoJson.fields.reduce((pre, field) => {
    return createYupSchema(pre, field)
  }, {})
  const validateSchema = Yup.object().shape(yupSchema)

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={formDemoJson.initialFormValue}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
        }) => (
          <Form onSubmit={handleSubmit}>
            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            <div>
              {errors.firstName && touched.firstName && errors.firstName}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormDemo
