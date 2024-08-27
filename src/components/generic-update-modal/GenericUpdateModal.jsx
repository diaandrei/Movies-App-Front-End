import React, { useState } from "react";
import { Modal, Box, TextField, Button, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { GenericButton } from "../generic-button/GenericButton";
import { InputField } from "../input-field/InputField";
import { Formik, FieldArray } from "formik";
import { updateMovieSchema } from "../../common/schemas";
import { usePutApiMoviesUpdateByIdMutation } from "../../redux/slice/movies.ts";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import { TextAreaField } from "../textarea/Textarea";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#696969", // Set default border color
    },
    "&:hover fieldset": {
      borderColor: "#696969", // Set border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent", // Remove border color on focus
    },
  },
  "& .MuiInputLabel-root": {
    display: "none", // Hide the label
  },
  "& .MuiInputBase-root": {
    backgroundColor: "white", // Set the background color
  },
});

const useStyles = makeStyles(() => ({
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#333",
    padding: "16px",
    boxShadow: 24,
    borderRadius: "8px",
  },
  actorInput: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  actorList: {
    marginTop: "16px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  actorItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export const GenericUpdateModal = ({ open, onClose, data, uponSucces }) => {
  const classes = useStyles();
  const getNames = (arr) => arr?.map((item) => item.name);

  const updateMovieData = (obj1, obj2) => {
    const updatedCast = obj1.actors.map((actor) => ({
      id: generateDummyId(),
      name: actor,
      role: "Role",
      updatedAt: new Date().toISOString(),
    }));

    const updatedOmdbRatings =
      obj2.omdbRatings.length > 0
        ? obj2.omdbRatings.map((rating) => ({
            ...rating,
            value: `${obj1.omdbRating}%`,
          }))
        : [
            {
              id: generateDummyId(),
              source: "Internet Movie Database",
              value: `${obj1.omdbRating}%`,
            },
          ];

    return {
      ...obj2,
      plot: obj1.plot,
      cast: updatedCast,
      omdbRatings: updatedOmdbRatings,
    };
  };

  const generateDummyId = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  const [updateMovieByIdApi, { isLoading }] =
    usePutApiMoviesUpdateByIdMutation();

  const updateMovieHandler = async (data) => {
    try {
      let payload = {
        moviesContractsRequestsUpdateMovieRequest: {
          title: data?.title,
          id: data?.id,
          runtime: data?.runtime,
          rated: data?.rated,
          plot: data?.plot,
          awards: data?.awards,
          poster: data?.poster,
          totalSeasons: data?.totalSeasons,
          isActive: data?.isActive,
          rating: data?.rating,
          userRating: data?.userRating,
          createdAt: data?.createdAt,
          updatedAt: data?.updatedAt,
          cast: data?.cast,
          genres: data?.genres,
          externalRatings: data?.externalRatings,
          omdbRatings: data?.omdbRatings,
          movieRatings: data?.movieRatings,
        },
      };

      let response = await updateMovieByIdApi(payload);
      const {
        data: { success, title },
      } = response;
      if (response && success) {
        toast.success(title);
        onClose();
        uponSucces();
      } else {
        onClose();
        toast.error(title);
      }
    } catch (error) {
      toast?.error(error?.message);
    }
  };
  const removePercentage = (value) => {
    value = value?.replace("%", "");
    return value;
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={classes.modalBox}>
        <h2 className="text-xl mb-4 text-white">
          {data?.title || "Update Title Details"}
        </h2>
        <Formik
          initialValues={{
            plot: data?.plot || "",
            omdbRating: removePercentage(data?.omdbRatings[0]?.value) || "",
            actors: getNames(data?.cast) || [],
          }}
          enableReinitialize
          validationSchema={updateMovieSchema}
          onSubmit={(values) => {
            updateMovieHandler(updateMovieData(values, data));
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            errors,
            submitForm,
            setFieldValue,
            values,
          }) => (
            <>
              <TextAreaField
                id={"plot"}
                name={"plot"}
                bgColor={"bg-white"}
                label={"Plot"}
                radius={"rounded-lg"}
                placeholder={"Plot"}
                value={values?.plot}
                error={touched.plot && errors.plot}
                handleChange={handleChange}
                handleBlur={handleBlur}
                textColor={"text-black"}
                className="h-30 w-full"
              />
              <InputField
                id={"omdbRating"}
                name={"omdbRating"}
                bgColor={"bg-white"}
                label={"IMDb Rating"}
                radius={"rounded-lg"}
                placeholder={"Omdb Rating"}
                value={values.omdbRating}
                error={touched.omdbRating && errors.omdbRating}
                handleChange={handleChange}
                handleBlur={handleBlur}
                textColor={"text-black"}
              />

              <div className={`text-white font-semibold mb-2`}>{"Actors"}</div>
              <FieldArray
                name="actors"
                render={(arrayHelpers) => (
                  <>
                    <div className={classes.actorInput}>
                      <CustomTextField
                        className={`flex items-center justify-between bg-white w-full border rounded-lg border-[#696969]   py-3 px-3 text-black placeholder:text-sm placeholder:text-[#696969] h-14 focus:outline-none`}
                        name="newActor"
                        variant="outlined"
                        fullWidth
                        value={values.newActor || ""}
                        onChange={(e) =>
                          setFieldValue("newActor", e.target.value)
                        }
                        onBlur={handleBlur}
                      />
                      <IconButton
                        color="primary"
                        onClick={() => {
                          if (values.newActor) {
                            arrayHelpers.push(values.newActor.trim());
                            setFieldValue("newActor", "");
                          }
                        }}
                      >
                        <AddIcon />
                      </IconButton>
                    </div>
                    {touched.actors && errors.actors ? (
                      <p className=" text-sm m-1 text-error-700">
                        {touched.actors && errors.actors}
                      </p>
                    ) : null}
                    {values.actors?.length > 0 && (
                      <div className={classes.actorList}>
                        {values.actors.map((actor, index) => (
                          <div key={index} className={classes.actorItem}>
                            <span className=" text-white">{actor}</span>
                            <IconButton
                              color="secondary"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              <CloseIcon />
                            </IconButton>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              />

              <div className=" mt-4 flex items-center justify-end gap-2">
                <GenericButton
                  onPress={onClose}
                  title={"Cancel"}
                  radius={"rounded-lg"}
                  bgColor={"bg-gray-600"}
                />
                <GenericButton
                  title={"Submit"}
                  radius={"rounded-lg"}
                  onPress={handleSubmit}
                  isLoading={isLoading}
                />
              </div>
            </>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};
