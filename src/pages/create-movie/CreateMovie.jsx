import React, { useState } from "react";
import {
  InputField,
  YearPicker,
  GenericButton,
  GenericModal,
} from "../../components";
import { usePostApiMoviesCreateMovieMutation } from "../../redux/slice/movies.ts";
import { createMovieSchema } from "../../common/schemas.js";
import { Formik, Form } from "formik";
import { path } from "../../common/routesNames.js";

const CreateMovie = () => {
  const initialValues = {
    title: "",
  };
  const [showModal, setShowModal] = useState(false);
  const [modalDetail, setModalDetail] = useState({
    type: "",
    message: "",
  });

  const [createMovieApi, { isLoading }] = usePostApiMoviesCreateMovieMutation();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const createMovieHandler = async (values) => {
    try {
      let response = await createMovieApi({
        moviesContractsRequestsCreateMovieRequest: {
          title: values?.title,
          yearOfRelease: selectedYear?.toString(),
        },
      });
      const {
        data: { success, title },
      } = response;

      if (response && success) {
        setModalDetail({
          type: success && "success",
          message: title,
        });
      } else {
        setModalDetail({
          type: !success && "error",
          message: title,
        });
      }
      setShowModal(true);
    } catch (error) {
      setModalDetail({
        type: "error",
        message: error?.message,
      });
      setShowModal(true);
    }
  };
  const handleKeyPress = (event, submitForm) => {
    if (event.which === 13) {
      submitForm();
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validateOnMount={true}
      onSubmit={(values, formikActions) => {
        createMovieHandler(values);
      }}
      validationSchema={createMovieSchema}
      enableReinitialize
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
        submitForm,
      }) => (
        <Form onKeyPress={(e) => handleKeyPress(e, submitForm)}>
          <div className=" min-h-screen w-full">
            <div className="max-w-7xl mx-auto py-5">
              <div className=" text-black text-xl font-semibold ">
                Create a movie by entering title and release year
              </div>
              <div className=" flex items-center justify-between my-2 gap-3 ">
                <div className=" w-1/2 ">
                  <InputField
                    id={"title"}
                    name={"title"}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label={"Movie Title"}
                    placeholder={"Enter Title"}
                    bgColor={"bg-white"}
                    radius={"rounded-lg"}
                    textColor={"text-black"}
                    height={true}
                    error={touched.title && errors.title}
                  />
                </div>
                <div className=" w-1/2 ">
                  <YearPicker
                    label={"Release Year"}
                    startYear={1900}
                    endYear={new Date().getFullYear()}
                    selectedYear={selectedYear}
                    onYearChange={handleYearChange}
                    height={true}
                    textColor={"text-black"}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-1/3">
                  <GenericButton
                    title={"Search"}
                    onPress={handleSubmit}
                    radius={"rounded-lg"}
                    isLoading={isLoading}
                  />
                </div>
              </div>
            </div>
            <GenericModal
              open={showModal}
              onClose={() => {
                setShowModal(false);
                if (modalDetail?.type == "success") {
                  window.location.replace(path.home);
                }
              }}
              type={modalDetail?.type}
              message={modalDetail?.message}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateMovie;
