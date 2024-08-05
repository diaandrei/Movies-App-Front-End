import React, { useEffect, useState } from "react";
import { GenericModal, MovieListCard } from "../../components";
import {
  useDeleteApiMoviesDeleteMovieMutation,
  useLazyGetApiMoviesAdminMoviesListQuery,
  usePutApiMoviesUpdateByIdMutation,
} from "../../redux/slice/movies.ts";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const MoviesList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDetail, setModalDetail] = useState({
    modalType: "",
    modalMessage: "",
  });
  const [deleteMovieByIdApi, { isLoading: confirmBtnLoader }] =
    useDeleteApiMoviesDeleteMovieMutation();
  const [updateMovieByIdApi] = usePutApiMoviesUpdateByIdMutation();
  const [getMovieListApi, { isLoading }] =
    useLazyGetApiMoviesAdminMoviesListQuery();
  const [movieId, setMovieId] = useState(null);

  const openModal = (type, message, id) => {
    setMovieId(id);
    setModalDetail({
      modalType: type,
      modalMessage: message,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const performDeleteAction = async (id) => {
    try {
      let response = await deleteMovieByIdApi({
        id: id,
      });

      const {
        data: { success, title },
      } = response;
      setModalOpen(false);
      if (response && success) {
        toast.success(title);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error(title);
      }
    } catch (error) {
      setModalOpen(false);
    }
  };

  const updateMovieHandler = async (data) => {
    let payload = {
      moviesContractsRequestsUpdateMovieRequest: {
        id: data?.id,
        plot: data?.plot,
      },
    };
    let response = await updateMovieByIdApi(payload);
    const {
      data: { success, title },
    } = response;
    if (response && success) {
      toast.success(title);
      window.location.reload();
    } else {
      toast.error(title);
    }
  };

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetchMoviesList();
  }, []);

  const fetchMoviesList = async () => {
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
  };

  const handleDelete = (id) => {
    openModal(
      "confirmation",
      "Are you sure you want to delete this title ?",
      id
    );
  };
  const handleEdit = (updatedMovie) => {
    updateMovieHandler(updatedMovie);
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen rounded-lg overflow-hidden">
      {isLoading ? (
        <div className=" flex items-center justify-center h-[100vh]">
          <CircularProgress size={30} thickness={5} sx={{ color: "black" }} />
        </div>
      ) : moviesList?.length > 0 ? (
        <MovieListCard
          movies={moviesList}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ) : (
        <div className="h-72 text-black font-semibold text-lg flex items-center justify-center">
          List is Empty
        </div>
      )}
      <GenericModal
        open={modalOpen}
        onClose={closeModal}
        message={modalDetail?.modalMessage}
        type={modalDetail?.modalType}
        onConfirm={() => {
          performDeleteAction(movieId);
        }}
        isLoading={confirmBtnLoader}
      />
    </div>
  );
};

export default MoviesList;
