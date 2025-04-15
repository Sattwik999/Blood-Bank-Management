const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const BASE_URL = 'https://api.eraktkosh.in/umang/apisetu/dept/eraktkoshapi/ws1';

app.get('/api/states', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/getstates`);
    res.json(response.data?.records || []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch states' });
  }
});

app.get('/api/districts', async (req, res) => {
  const { state } = req.query;
  try {
    const response = await axios.get(`${BASE_URL}/getdistricts`, {
      params: { stateName: state }
    });
    res.json(response.data?.records || []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch districts' });
  }
});

app.get('/api/nearbystate', async (req, res) => {
  const { state, district } = req.query;
  try {
    const response = await axios.get(`${BASE_URL}/nearbystate`, {
      params: {
        stateName: state,
        districtName: district
      }
    });
    res.json(response.data?.records || []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blood availability' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on http://localhost:${PORT}`);
});
