import * as yup from 'yup';

export const Schemas = yup.object().shape({
    email: yup.string().email("Dogru email adresi yazin").required("Email adresi vacibdir"),
    password: yup.string().required("Sifre yazmaq vacibdir").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Parolda ən azı bir böyük hərf, bir kiçik hərf, bir xüsusi simvol və minimum səkkiz simvoldan ibarət bir nömrə olmalıdır"
    ),

    confirmPassword: yup.string().required("Sifre tekrari yazmaq lazimdir")
        .oneOf([yup.ref("password", yup.password)], "Sifreler uygun gelmir"),

})