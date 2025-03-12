import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';

const App = () => {
  // Sample campaign data
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      brandName: "Nike",
      brandLogo: "https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg",
      campaignTitle: "Sport Essentials Collection",
      payoutType: "Fixed Pay",
      payoutAmount: "₹5,000",
      description: "Create authentic content featuring our new sport essentials collection. Looking for fitness enthusiasts and athletes.",
      hiredCount: 8,
      totalSlots: 15,
      category: "Fashion & Fitness",
      deadline: "March 25, 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTHXdx56AdEL1D7c4W8uaAV4NOBQC7K_U1g&s"
    },
    {
      id: 2,
      brandName: "Sephora",
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvk9BY1J6uiOok7R_BKGoD-AQxUxrZdZ44A&s",
      campaignTitle: "Spring Beauty Trends",
      payoutType: "Barter",
      payoutAmount: "Product worth ₹3,500",
      description: "Share your beauty routine using our new spring collection products. Perfect for beauty and lifestyle creators.",
      hiredCount: 12,
      totalSlots: 20,
      category: "Beauty & Lifestyle",
      deadline: "March 30, 2025",
      image: "https://www.livemint.com/lm-img/img/2023/11/04/1600x900/sephora_1699095767908_1699095768097.jpg"
    },
    {
      id: 3,
      brandName: "DoorDash",
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvdA4h2b5rBD_U0KxC9pssWaP6qpbUdMKjQ&s",
      campaignTitle: "Food Discovery Campaign",
      payoutType: "Refund",
      payoutAmount: "Up to ₹1,200",
      description: "Order your favorite meal and create content about your experience. Looking for food reviewers and lifestyle creators.",
      hiredCount: 5,
      totalSlots: 25,
      category: "Food & Dining",
      deadline: "April 5, 2025",
      image: "https://play-lh.googleusercontent.com/wmT3qSzJ-gvNr3l36JG7PWfSlMIK2lLfmie3N-NtEPIpRhg4BwI17eCNq_evAB7xucNuIjFRrJg=w1296-h2160-rw"
    },
    {
      id: 4,
      brandName: "Spotify",
      brandLogo: "https://m.media-amazon.com/images/I/31B2Nyzd8XL.png",
      campaignTitle: "Playlist Sharing",
      payoutType: "Fixed Pay",
      payoutAmount: "₹2,500",
      description: "Create and share your custom playlists with followers. Music enthusiasts and lifestyle creators welcome.",
      hiredCount: 18,
      totalSlots: 30,
      category: "Music & Entertainment",
      deadline: "March 28, 2025",
      image: "https://play-lh.googleusercontent.com/kDXJ6XA2Cm47lzDCvvu6HNCu0PWmTwZKiY0ldCWrCgXGT3Ms-lbP_WN1v5vknspnLT15=w526-h296-rw"
    },
    {
      id: 5,
      brandName: "Airbnb",
      brandLogo: "https://avatars.githubusercontent.com/u/698437?s=280&v=4",
      campaignTitle: "Local Getaways",
      payoutType: "Barter + Fixed Pay",
      payoutAmount: "Stay + ₹3,000",
      description: "Experience and share content about unique stays in your region. Travel and lifestyle creators preferred.",
      hiredCount: 7,
      totalSlots: 10,
      category: "Travel & Lifestyle",
      deadline: "April 10, 2025",
      image: "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg"
    },
    {
      id: 6,
      brandName: "Puma",
      brandLogo: "https://staticg.sportskeeda.com/editor/2023/03/bda84-16779522739911-1920.jpg",
      campaignTitle: "Street Style Collection",
      payoutType: "Fixed Pay",
      payoutAmount: "₹4,500",
      description: "Show off your street style with our new urban collection. Fashion and lifestyle creators wanted.",
      hiredCount: 10,
      totalSlots: 15,
      category: "Fashion & Lifestyle",
      deadline: "March 27, 2025",
      image: "https://www.puma-catchup.com/wp-content/uploads/2020/07/UNITY-headerpic.jpg"
    }
  ]);

  // Filter states
  const [activeFilter, setActiveFilter] = useState('All');
  const filterOptions = ['All', 'Fixed Pay', 'Barter', 'Refund', 'Mixed'];

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter campaigns based on active filter and search query
  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesFilter = 
      activeFilter === 'All' || 
      (activeFilter === 'Mixed' && campaign.payoutType.includes('+')) ||
      campaign.payoutType.includes(activeFilter);
    
    const matchesSearch = 
      campaign.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.campaignTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">W</div>
            <h1 className="ml-3 text-2xl font-bold text-gray-900">Wobb</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-sm bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
              Notifications
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
              <CgProfile/>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-10 sm:mb-0">
        {/* Title and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900">Available Campaigns</h2>
            <p className="text-sm text-gray-500">Find and apply to campaigns that match your niche</p>
          </div>
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex overflow-x-auto scrollbar-hide mb-6 pb-2">
          <div className="flex space-x-2">
            {filterOptions.map(filter => (
              <button
                key={filter}
                className={`px-4 py-2 text-sm rounded-full whitespace-nowrap ${
                  activeFilter === filter 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Campaign Cards Grid */}
        {filteredCampaigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map(campaign => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium text-gray-900">No campaigns found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query</p>
          </div>
        )}
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex justify-around">
          <button className="flex flex-col items-center text-blue-500">
            <div className="h-6 w-6 mb-1 bg-blue-500 rounded"></div>
            <span className="text-xs">Campaigns</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <div className="h-6 w-6 mb-1 bg-gray-300 rounded"></div>
            <span className="text-xs">Applications</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <div className="h-6 w-6 mb-1 bg-gray-300 rounded"></div>
            <span className="text-xs">Earnings</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <div className="h-6 w-6 mb-1 bg-gray-300 rounded"></div>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Campaign Card Component
const CampaignCard = ({ campaign }) => {
  // Calculate hiring progress percentage
  const progressPercentage = (campaign.hiredCount / campaign.totalSlots) * 100;
  
  // Determine badge color based on payout type
  const getBadgeColor = (payoutType) => {
    if (payoutType.includes('Fixed Pay')) return 'bg-green-100 text-green-800';
    if (payoutType.includes('Barter')) return 'bg-purple-100 text-purple-800';
    if (payoutType.includes('Refund')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Campaign Image */}
      <div className="relative">
        <img 
          src={campaign.image} 
          alt={campaign.campaignTitle} 
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getBadgeColor(campaign.payoutType)}`}>
            {campaign.payoutType}
          </span>
        </div>
      </div>
      
      {/* Card Body */}
      <div className="p-4">
        {/* Brand Info */}
        <div className="flex items-center mb-4">
          <img 
            src={campaign.brandLogo} 
            alt={campaign.brandName} 
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="font-medium text-gray-900">{campaign.brandName}</h3>
            <p className="text-xs text-gray-500">{campaign.category}</p>
          </div>
        </div>
        
        {/* Campaign Title */}
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{campaign.campaignTitle}</h2>
        
        {/* Campaign Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{campaign.description}</p>
        
        {/* Payout Details */}
        <div className="flex items-center mb-4">
          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          </div>
          <span className="text-sm font-medium text-gray-900">{campaign.payoutAmount}</span>
        </div>
        
        {/* Hiring Progress */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-500">Hiring Progress</span>
            <span className="text-xs font-medium text-gray-700">{campaign.hiredCount}/{campaign.totalSlots}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Deadline */}
        <div className="text-xs text-gray-500 mb-4">
          Deadline: {campaign.deadline}
        </div>
        
        {/* Apply Button */}
        <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default App;