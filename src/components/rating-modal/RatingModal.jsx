import React, { useState, useEffect } from "react";
import { Modal, Box, Typography } from "@mui/material";
import { HoverRating } from "../hover-rating/HoverRating";
import { GenericButton } from "../generic-button/GenericButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useLazyGetApiMoviesCreateRatingsQuery } from "../../redux/slice/movies.ts";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setIsRated } from "../../redux/slice/ratingSlice.js";

export const RatingModal = ({
  movieName,
  openModal,
  isLoggedIn,
  movieId,
  movieRating,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(movieRating[0]?.rating || 0);
  const [createRatingApi, { isLoading }] =
    useLazyGetApiMoviesCreateRatingsQuery();

  useEffect(() => {
    if (movieRating?.length > 0) {
      setValue(movieRating[0].rating);
    }
  }, [movieRating]);

  const addRatingHandler = async () => {
    const payload = {
      rating: value,
      movieId: movieId,
    };

    const updatingPayload = {
      rating: value,
      movieId: movieId,
      ratingId: movieRating[0]?.id,
      userId: movieRating[0]?.userId,
    };

    try {
      const response = await createRatingApi(
        movieRating?.length > 0 ? updatingPayload : payload
      );

      const {
        data: { success, title },
      } = response;

      if (response && success) {
        toast.success(title);
        dispatch(setIsRated(true));

        setValue(value);
      } else {
        toast.error(title);
      }
    } catch (error) {
      toast.error("An error occurred while submitting your rating.");
    }

    handleClose();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {movieRating?.length > 0 && isLoggedIn ? (
        <div
          className="flex items-center gap-1"
          style={{
            cursor: "pointer",
            transition: "transform 0.2s, background-color 0.2s",
            padding: "8px",
            borderRadius: "4px",
            minHeight: "32px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.backgroundColor = "#64748b";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
          onClick={handleOpen}
        >
          <StarIcon
            style={{ color: "#FFD700", fontSize: "20px" }}
            fontSize="inherit"
          />
          <span className="text-white" style={{ marginLeft: "4px" }}>
            {movieRating[0]?.rating}
          </span>
        </div>
      ) : (
        <button
          className="cursor-pointer shadow px-2 text-white rounded-md overflow-hidden"
          style={{
            transition: "transform 0.2s, background-color 0.2s",
            padding: "8px",
            borderRadius: "4px",
            backgroundColor: "transparent",
            minHeight: "32px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.backgroundColor = "#64748b";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
          onClick={handleOpen}
        >
          <StarBorderIcon
            color="inherit"
            style={{ fontSize: "20px" }}
            fontSize="inherit"
          />
        </button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="rating-modal-title"
        aria-describedby="rating-modal-description"
      >
        <Box
          className={
            "circular-gradient p-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md drop-shadow rounded-lg text-white"
          }
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "red",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="rating-modal-title" variant="h6" component="h2">
            {`Rate ${movieName}`}
          </Typography>
          <Typography id="rating-modal-description" sx={{ my: 1 }}>
            Please provide your rating.
          </Typography>
          <HoverRating setValue={setValue} value={value} />
          <div className="flex justify-between items-center gap-2">
            <GenericButton
              onPress={handleClose}
              title={"Cancel"}
              bgColor={"transparent"}
              borderColor={"border-gray-600"}
              radius={"rounded-md"}
            />
            <GenericButton
              isLoading={isLoading}
              title={"Rate"}
              radius={"rounded-md"}
              onPress={addRatingHandler}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};
