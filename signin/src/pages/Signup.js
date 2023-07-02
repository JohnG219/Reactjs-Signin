// styled components
import { StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText } from './../components/Styles';

import Logo from './../assets/logo.png';

// formik
import {Formik, Form} from 'formik';
import {TextInput} from "./../components/FormLib";
import * as Yup from 'yup';

// icons
import {FiMail, FiLock, FiUser, FiCalendar } from 'react-icons/fi';

// Loader
import { ColorRing } from 'react-loader-spinner';

// auth & redux
import { connect } from 'react-redux';
import { signupUser } from "./../auth/actions/userActions";
import { useHistory } from "react-router-dom";



const Signup = ({signupUser}) => {
        const history = useHistory();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>Create Account</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        dateOfBirth: "",
                        name: ""
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email adress")
                            .required("Required"),
                            password: Yup.string()
                            .min(8, "Password is too short")
                            .max(26, "Password is too long")
                            .required("Required"),
                            name: Yup.string().required("Required"),
                            dateOfBirth: Yup.date().required("Required"),
                            repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Your password and confirmation password must match")
                        })
                    }

                    onSubmit={(values, { setSubmitting, setFieldError }) => {
                        signupUser(values, history, setFieldError, setSubmitting)
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput
                                name="name"
                                type="text"
                                label="Full Name"
                                placeholder="John McCarthy"
                                icon={<FiUser />} 
                            />
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="Elijaashley@example.com"
                                icon={<FiMail />} 
                            />
                            <TextInput
                                name="dateOfBirth"
                                type="date"
                                label="Date of Birth"
                                icon={<FiCalendar />} 
                            />

                            <TextInput 
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="**********"
                                icon={<FiLock/>} 
                            />
                            <TextInput 
                                name="repeatPassword"
                                type="password"
                                label="Repeat Password"
                                placeholder="**********"
                                icon={<FiLock/>} 
                            />

                            <ButtonGroup>
                                {!isSubmitting && ( <StyledFormButton type="submit">
                                    Signup
                                </StyledFormButton>
                                )}

                                {isSubmitting && (
                                    <ColorRing
                                    type="ThreeDots"
                                    color={colors.theme}
                                    height={49}
                                    width={100}
                                    />
                                )}

                            </ButtonGroup>


                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    Already have an account? <TextLink to="/login">Login</TextLink> 
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                ReactJS 
            </CopyrightText>
        </div>
    )
}

export default connect(null, {signupUser})(Signup); 