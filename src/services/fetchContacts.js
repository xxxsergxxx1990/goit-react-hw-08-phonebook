import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { options } from 'components/Form/Form';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

