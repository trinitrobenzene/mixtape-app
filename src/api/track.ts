import axios from './config';

const TrackService = {
    /**
     * GET: http://localhost:4000/track
     * Get all tracks from database
     */
    getAllTracks: async () => await axios.get('track'),
};

export default TrackService;
