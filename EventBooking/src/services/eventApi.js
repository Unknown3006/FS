import axios from 'axios';

const BASE_URL = 'https://api.example.com/events'; // Replace with actual API endpoint

export const eventApi = {
  getAllEvents: async () => {
    try {
      // Mock data with updated dates and more categories
      return {
        data: [
          {
            id: 1,
            name: "Pathaan",
            type: "Movie",
            language: "Hindi",
            genre: ["Action", "Thriller"],
            duration: "2h 30min",
            releaseDate: "2025-04-01",
            price: "₹300",
            rating: 4.5,
            location: "Mumbai",
            image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pathaan-et00323848-1674372556.jpg",
            venues: [
              {
                name: "PVR Cinemas",
                address: "Phoenix Mall, Mumbai",
                showTimes: ["10:00 AM", "1:30 PM", "5:00 PM"]
              }
            ]
          },
          {
            id: 2,
            name: "Arijit Singh Live in Concert",
            type: "Concert",
            language: "Hindi",
            genre: ["Music", "Live Performance"],
            duration: "3h",
            date: "2025-04-15",
            price: "₹2500",
            rating: 4.8,
            location: "Bangalore",
            image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-arijit-singh-live-in-concert-bangalore-0-2023-12-6-t-9-45-8.jpg",
            venue: {
              name: "Palace Grounds",
              address: "Palace Road, Bangalore",
              gates: ["6:00 PM"]
            }
          },
          {
            id: 3,
            name: "Sunburn Festival",
            type: "Festival",
            genre: ["EDM", "Dance"],
            duration: "8h",
            date: "2025-05-01",
            price: "₹4000",
            rating: 4.6,
            location: "Goa",
            image: "https://example.com/sunburn.jpg",
            venue: {
              name: "Vagator Beach",
              address: "North Goa",
              gates: ["2:00 PM"]
            }
          },
          {
            id: 4,
            name: "Stand-up Comedy Night",
            type: "Comedy",
            duration: "2h",
            date: "2025-04-20",
            price: "₹800",
            rating: 4.7,
            location: "Delhi",
            image: "https://example.com/comedy.jpg",
            venue: {
              name: "The Comedy Club",
              address: "Connaught Place, Delhi",
              gates: ["8:00 PM"]
            }
          },
          {
            id: 5,
            name: "IPL Final Match",
            type: "Sports",
            duration: "4h",
            date: "2025-05-30",
            price: "₹2000",
            rating: 4.9,
            location: "Mumbai",
            image: "https://example.com/ipl.jpg",
            venue: {
              name: "Wankhede Stadium",
              address: "Mumbai",
              gates: ["7:00 PM"]
            }
          },
          {
            id: 6,
            name: "Romeo and Juliet",
            type: "Theatre",
            duration: "2h 30min",
            date: "2025-04-25",
            price: "₹1200",
            rating: 4.5,
            location: "Bangalore",
            image: "https://example.com/theatre.jpg",
            venue: {
              name: "Ranga Shankara",
              address: "JP Nagar, Bangalore",
              gates: ["6:30 PM"]
            }
          }
        ]
      };

      // When you have actual API:
      // const response = await axios.get(`${BASE_URL}/events`);
      // return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  getEventById: async (id) => {
    try {
      // Implement actual API call when available
      const response = await axios.get(`${BASE_URL}/events/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching event:', error);
      throw error;
    }
  },

  searchEvents: async (query) => {
    try {
      // Implement actual API call when available
      const response = await axios.get(`${BASE_URL}/events/search?q=${query}`);
      return response.data;
    } catch (error) {
      console.error('Error searching events:', error);
      throw error;
    }
  }
}; 