import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api_BASE from "../common/api_BASE";
import API_KEY from "../common/api_KEY"
const initialState = {
    isLoading: false,
    genres: [],
    celebrities: [],
    nowPlaying: [],
    popular: [],
    toprate: [],
    upcoming: [],
    trailerKey: "",
    isPopupShow: false,
}

export const getNowPlaying = createAsyncThunk('movie/getNowPlaying', async () => {
    const res = await api_BASE.get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
        .then(data => data.data.results)
    return res
})

export const getPopular = createAsyncThunk('movie/getPopular', async () => {
    const res = await api_BASE.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(data => data.data.results)
    return res
})

export const getToprate = createAsyncThunk('movie/getToprate', async () => {
    const res = await api_BASE.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        .then(data => data.data.results)
    return res
})

export const getUpcoming = createAsyncThunk('movie/getUpcoming', async () => {
    const res = await api_BASE.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        .then(data => data.data.results)
    return res
})

export const getGenres = createAsyncThunk('movie/getGenres', async () => {
    const res = await api_BASE.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then(data => data.data.genres)
    return res
})

export const getCelebrities = createAsyncThunk('movie/getCelebrities', async () => {
    const res = await api_BASE.get(`/person/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(data => data.data.results)
    return res
})

export const getMovieTrailer = createAsyncThunk('movie/getMovieTrailer', async (movie_id) => {
    const res = await api_BASE.get(`/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(data => data.data.results.find(({name}) => name.indexOf("Official Trailer") !== -1).key)
    return res
})




const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setIsPopupShow: (state, action) => {
            state.isPopupShow = action.payload
        }
    },
    extraReducers: {
        // NOW PLAYING 
        [getNowPlaying.pending]: (state) => {
            state.isLoading = true
        },
        [getNowPlaying.fulfilled]: (state, action) => {
            state.nowPlaying = action.payload
            state.isLoading = false
        },
        [getNowPlaying.rejected]: (state) => {
            state.isLoading = false
        },


        // POPULAR
        [getPopular.pending]: (state) => {
            state.isLoading = true
        },
        [getPopular.fulfilled]: (state, action) => {
            state.popular = action.payload
            state.isLoading = false
        },
        [getPopular.rejected]: (state) => {
            state.isLoading = false
        },


        // TOP RATE
        [getToprate.pending]: (state) => {
            state.isLoading = true
        },
        [getToprate.fulfilled]: (state, action) => {
            state.toprate = action.payload
            state.isLoading = false
        },
        [getToprate.rejected]: (state) => {
            state.isLoading = false
        },


        // UPCOMING
        [getUpcoming.pending]: (state) => {
            state.isLoading = true
        },
        [getUpcoming.fulfilled]: (state, action) => {
            state.upcoming = action.payload
            state.isLoading = false
        },
        [getUpcoming.rejected]: (state) => {
            state.isLoading = false
        },


        // GENRES
        [getGenres.pending]: (state) => {
            state.isLoading = true
        },
        [getGenres.fulfilled]: (state, action) => {
            state.genres = action.payload
            state.isLoading = false
        },
        [getGenres.rejected]: (state) => {
            state.isLoading = false
        },


        // CELEBRITIES
        [getCelebrities.pending]: (state) => {
            state.isLoading = true
        },
        [getCelebrities.fulfilled]: (state, action) => {
            state.celebrities = action.payload
            state.isLoading = false
        },
        [getCelebrities.rejected]: (state) => {
            state.isLoading = false
        },

        // TRAILER
        [getMovieTrailer.pending]: (state) => {
            state.isLoading = true
        },
        [getMovieTrailer.fulfilled]: (state, action) => {
            state.trailerKey = action.payload
            state.isLoading = false
        },
        [getMovieTrailer.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export const { setIsPopupShow  } = movieSlice.actions
export default movieSlice.reducer;