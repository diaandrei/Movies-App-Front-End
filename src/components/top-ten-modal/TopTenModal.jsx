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
import {
  CheckBoxOutlineBlank,
  CheckBox,
  FilterList,
} from "@mui/icons-material";
import { IoClose } from "react-icons/io5";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [getMovieListApi, { isLoading }] =
    useLazyGetApiMoviesAdminMoviesListQuery();
  const [createTopMovieApi, { isLoading: btnLoader }] =
    usePostApiMoviesCreateTopMoviesListMutation();

  useEffect(() => {
    if (isLoggedIn) {
      fetchMoviesList();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (open) {
      setSelectedMovieIds(getSelectedIds);
    }
  }, [open, getSelectedIds]);

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
    setSelectedMovieIds(getSelectedIds);
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

  const handleDeselectAll = () => {
    setSelectedMovieIds([]);
  };

  const filteredMoviesList = moviesList.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          transition: "all 1s ease-in-out",
        },
      }}
    >
      <DialogTitle className="text-2xl font-semibold flex justify-between items-center">
        {`Select Titles (${selectedMovieIds?.length}/10)`}
        <FilterList
          onClick={handleDeselectAll}
          className="text-red-600 cursor-pointer"
        />
      </DialogTitle>
      <DialogContent className="space-y-4 scrollbar-thin">
        <div className="mb-4 flex border px-2 py-1 rounded-full border-gray-700 items-center">
          <input
            type="text"
            placeholder="Search movies"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 w-full border-none focus:outline-none rounded-full"
          />
          {searchQuery?.length > 0 && (
            <button
              onClick={() => setSearchQuery("")}
              type="submit"
              className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white h-7 w-7 flex items-center justify-center rounded-full"
            >
              <IoClose size={14} />
            </button>
          )}
        </div>
        {isLoading ? (
          <div className="mt-10 flex items-center justify-center">
            <CircularProgress size={40} thickness={6} sx={{ color: "black" }} />
          </div>
        ) : filteredMoviesList.length > 0 ? (
          filteredMoviesList.map((movie) => (
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
        ) : (
          <div className="text-black flex items-center justify-center font-semibold h-[50vh]">
            No titles found
          </div>
        )}
      </DialogContent>
      <div className="mx-5 mt-2">
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
