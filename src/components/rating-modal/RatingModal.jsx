import React, { useState } from "react";
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
  ratingId,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(movieRating[0]?.rating || 0);
  const [createRatingApi, { isLoading }] =
    useLazyGetApiMoviesCreateRatingsQuery();

  const addRatingHandler = async () => {
    let payload = {
      rating: value,
      movieId: movieId,
    };
    const updatingPayload = {
      rating: value,
      movieId: movieId,
      ratingId: movieRating[0]?.id,
      userId: movieRating[0]?.userId,
    };

    const response = await createRatingApi(
      movieRating?.length > 0 ? updatingPayload : payload
    );
    const {
      data: { success, title },
    } = response;
    if (response && success) {
      toast.success(title);
      dispatch(setIsRated(true));
    } else {
      toast.error(title);
    }
    handleClose();
  };

  return (
    <div>
      <button
        onClick={() => {
          if (isLoggedIn) {
            handleOpen();
          } else {
            openModal();
          }
        }}
        className="flex items-center gap-1"
        style={{
          cursor: "pointer",
          transition: "transform 0.2s, opacity 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.opacity = "0.8";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.opacity = "1";
        }}
      >
        {movieRating?.length > 0 ? (
          <StarIcon style={{ color: "#FFD700" }} fontSize="medium" />
        ) : (
          <StarBorderIcon style={{ color: "gray" }} fontSize="medium" />
        )}
      </button>
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
