import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Checkbox,
  FormControlLabel,
  Typography,
  CircularProgress,
} from "@mui/material";
import { CheckBoxOutlineBlank, CheckBox } from "@mui/icons-material";
import { GenericButton } from "../generic-button/GenericButton";
import {
  usePostApiMoviesCreateTopMoviesListMutation,
  useLazyGetApiMoviesAdminMoviesListQuery,
} from "../../redux/slice/movies.ts";
import { toast } from "react-toastify";
import { getToken } from "../../utils/LocalStorage.js";
import { useSelector } from "react-redux";

export const MovieSelectionPopup = ({ open, handleClose }) => {
  const getSelectedIds = useSelector(
    (state) => state.topTenMoviesReducer.selectedMovies
  );

  const isLoggedIn = getToken();
  const [selectedMovieIds, setSelectedMovieIds] = useState([]);
  const [showValidation, setShowValidation] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [getMovieListApi, { isLoading }] =
    useLazyGetApiMoviesAdminMoviesListQuery();
  const [createTopMovieApi, { isLoading: btnLoader }] =
    usePostApiMoviesCreateTopMoviesListMutation();

  useEffect(() => {
    if (isLoggedIn) {
      fetchMoviesList();
    }
  }, []);
  useEffect(() => {
    if (open) {
      setSelectedMovieIds(getSelectedIds);
    }
  }, [open]);

  const fetchMoviesList = async () => {
    try {
      let result = await getMovieListApi({
        title: "",
      });
      const {
        data: {
          success,
          content: { items },
        },
      } = result;
      if (result && success) {
        if (items?.length > 0) {
          setMoviesList(items || []);
        }
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  const createTopTenMovieHandler = async (data) => {
    let result = await createTopMovieApi({ body: data });
    const {
      data: { success, title },
    } = result;
    if (result && success) {
      toast.success(title);
      window.location.reload();
    } else {
      toast.error(title);
    }
    handleClose();
  };

  const handleToggle = (id) => {
    setSelectedMovieIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((movieId) => movieId !== id);
      } else if (prev.length < 10) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const handleCancel = () => {
    setSelectedMovieIds([]);
    handleClose();
  };

  const handleSave = () => {
    if (selectedMovieIds.length < 10) {
      setShowValidation(true);
    } else {
      setShowValidation(false);
      createTopTenMovieHandler(selectedMovieIds);
    }
  };

  return (
    <Dialog open={open} onClose={handleCancel} maxWidth="md" fullWidth>
      <DialogTitle className="text-2xl font-semibold">
        {`Select Titles (${selectedMovieIds?.length}/10)`}
      </DialogTitle>
      <DialogContent className="space-y-4">
        {isLoading ? (
          <div className=" mt-10 flex items-center justify-center">
            <CircularProgress size={40} thickness={6} sx={{ color: "black" }} />
          </div>
        ) : (
          moviesList.map((movie) => (
            <div
              key={movie.id}
              className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 p-4 border border-gray-300 rounded-lg"
            >
              <div className="flex items-center justify-center md:mr-4">
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlank />}
                      checkedIcon={<CheckBox />}
                      checked={selectedMovieIds.includes(movie.id)}
                      onChange={() => handleToggle(movie.id)}
                    />
                  }
                  label=""
                />
              </div>
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-20 h-30 object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold">{movie.title}</h3>
                <p className="text-sm text-gray-600">{movie.plot}</p>
              </div>
            </div>
          ))
        )}
      </DialogContent>
      <div className=" mx-5 mt-2">
        {showValidation && (
          <Typography color="error">
            Please select at least 10 titles.
          </Typography>
        )}
      </div>
      <DialogActions>
        <div className="flex gap-2 w-1/3">
          <GenericButton
            title={"Cancel"}
            onPress={handleCancel}
            radius={"rounded-md"}
            bgColor={"bg-transparent"}
            titleColor={"text-darkBlue-900"}
            borderColor={"border-darkBlue-900"}
            hoverBgColor={"bg-transparent"}
          />
          <GenericButton
            isLoading={btnLoader}
            title={"Save"}
            onPress={handleSave}
            radius={"rounded-md"}
          />
        </div>
      </DialogActions>
    </Dialog>
  );
};
