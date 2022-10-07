import React, { useState } from 'react'
import { createContext } from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";
import {
    baseUrl,
    getImg64,
    allowedFileSize,
    fileErrorMessage,
} from "../services";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
const PostProgettoContext = createContext();

const PostProgettoProvider = (props) => {

    const [name,setName]=useState()
    const [step1,setStep1]=useState();
    const [step2,setStep2]=useState();


    //postProgettostep1
    const [image, setImg] = useState();
    const [fileUpload, setFileUpload] = useState();
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    //PostProgettoStep2
    const [singleProject, setSingleProject] = useState(false);
    const [ongoingProject, setOngoingProject] = useState(false);
    const [dividesMultiMilestone, setDividesMultiMilestonect] = useState(false);

    //PosstProgettoStep3
    const [singleArtista, setSingleArtista] = useState(false);
    const [ongoingArtista, setOngoingArtista] = useState(false);
    const [dividesMultiMilestoneArtista, setDividesMultiMilestoneArtista] = useState(false);

    const formikstep1 = useFormik({
        initialValues: {
            name: "asdfasdf",
            short_description1: "asdfasd",
            problem_that_solves: "asdfasdf",
            in_depth_description: "asdfasdf",
            partner: "asdfasdf",

        },
        validationSchema: Yup.object({
            name: Yup.string().required("*Nome Progetto is Required"),
            short_description1: Yup.string().required("*Breve descrizione del progetto is Required"),
            problem_that_solves: Yup.string().required("*Problema che risolve is Required"),
            in_depth_description: Yup.string().required("*Descrizione più approfondita is Required"),
            partner: Yup.string().required("*Partner is Required"),

        }),
        onSubmit: async function (values, { resetForm }) {
            if (!image) {
                alert("!Please add company image");
                return;
            }
            if (!fileUpload) {
                alert("!Please add cover image");
                return;
            }


            const item1 = {
                //accountType: "company",
                coverImage: fileUpload,
                name: values.name,
                short_description1: values.short_description1,
                problem_that_solves: values.problem_that_solves,
                in_depth_description: values.in_depth_description,
                partner: values.partner,
                image: image,

            };
            setStep1(item1)
            setName('bilal')
           
            navigate("/post-progetto-step2");
        },
    });

    useEffect(() => {
    console.log('changed---------------------',step1)
    }, [step1])

    const formikstep2 = useFormik({
        initialValues: {
            budget: "",
        },
        validationSchema: Yup.object({
            budget: Yup.string()
                .required("*Budget is Required"),

        }),
        onSubmit: async function (values, { resetForm }) {
            console.log("----------------",step1)
            const item = {
                singleProject: singleProject,
                ongoingProject: ongoingProject,
                dividesMultiMilestone:dividesMultiMilestone,
                budget: values.budget,

            };

            alert(name)
            //console.log(item)
            navigate("/post-progetto-step3");
        },
    });
    //PostProgettoStep3

    const formikstep3 = useFormik({
        initialValues: {
            finish_line: "",
            budget_finish_line: "",
            short_description: "",
            pages: "",
            renew_fundraising: "",
        },
        validationSchema: Yup.object({
            finish_line: Yup.string()
                .required("*Traguardo is Required"),
            budget_finish_line: Yup.string()
                .required("*Budget Traguardo is Required"),
            short_description: Yup.string()
                .required("*Breve descrizion is Required"),
        }),
        onSubmit: async function (values, { resetForm }) {
            
            console.log(formikstep1.values)
            console.log(formikstep2.values)
            
            const item = {
                //formikstep1
                coverImage: fileUpload,
                name: formikstep1.values.name,
                short_description1: formikstep1.values.short_description1,
                problem_that_solves: formikstep1.values.problem_that_solves,
                in_depth_description: formikstep1.values.in_depth_description,
                partner: formikstep1.values.partner,
                image: image,

                
                //formikstep2
                singleProject: singleProject,
                ongoingProject:ongoingProject,
                dividesMultiMilestone:dividesMultiMilestone,
                budget: formikstep2.values.budget,
                //formikstep3
                singleArtista: singleArtista,
                ongoingArtista: ongoingArtista,
                dividesMultiMilestoneArtista: dividesMultiMilestoneArtista,
                finish_line: values.finish_line,
                budget_finish_line: values.budget_finish_line,
                short_description: values.short_description,
                renew_fundraising: values.renew_fundraising,
            };

            // setLoader(true);
            // const data = await axios.post(baseUrl + "signup", item);
            // setLoader(false);

            // if (data.data.status) {
            //   alert("Register Successful");
            //   resetForm();
            //   return;
            // }

            // if (
            //   typeof data?.data?.message === "string" &&
            //   data?.data?.message?.length > 0
            // ) {
            //   alert(data?.data?.message);
            //   return;
            // }

            // if (data.data.message?.details[0]?.message) {
            //   alert(data.data.message?.details[0]?.message);
            // }
            console.log(item);
            navigate("/progetti");
            // console.log(data.data.message);
        }
    });

    return (

        <div>
            <PostProgettoContext.Provider value={{
                formikstep1,
                image,
                fileUpload,
                loader,
                setImg,
                setFileUpload,
                setLoader,
                allowedFileSize,
                fileErrorMessage,
                getImg64,
                

                //PostProgettoStep2
                formikstep2,
                singleProject,
                setSingleProject,
                ongoingProject,
                setOngoingProject,
                dividesMultiMilestone,
                setDividesMultiMilestonect,

                //PostProgettoStep2
                formikstep3,
                singleArtista,
                setSingleArtista,
                ongoingArtista,
                setOngoingArtista,
                dividesMultiMilestoneArtista,
                setDividesMultiMilestoneArtista

            }}>
                {props.children}
            </PostProgettoContext.Provider>
        </div>

    )
}

export { PostProgettoProvider };
export default PostProgettoContext;