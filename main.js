// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	name: "Night Owl",
	artist: "Broke For Free",
	image: "Arvind.jpg",
	path: "NEJ'_-_Paro_(sped_up)_ringtone__[_Download_link_]__PIXEL_BGM(128k)_20231031195307.mp3"
},
{
	name: "Enthusiast",
	artist: "Tours",
	image: "Arvind.jpg",
	path: "Ve_Pyar_Nawa_Nawa_Hoya_Lagda_(Full_Song)___Pyar_Nava_Nava_Sucha_Yaar___New_Punjabi_Song(128k).m4a"
},
{
	name: "Shipping Lanes",
	artist: "Chad Crouch",
	image: "Arvind.jpg",
	path: "Pagal_Hai_Mai_Kuch_Karna_Java___Ishqan_De_Rog___Deep_Chambal_New_Punjabi_Song_Latest_Punjabi_Songs(128k).m4a",
},
{
	name: "Night Owl",
	artist: "Broke For Free",
	image: "Arvind.jpg",
	path: "NEJ'_-_Paro_(sped_up)_ringtone__[_Download_link_]__PIXEL_BGM(128k)_20231031195307.mp3"
},
{
	name: "Enthusiast",
	artist: "Tours",
	image: "Arvind.jpg",
	path: "Ve_Pyar_Nawa_Nawa_Hoya_Lagda_(Full_Song)___Pyar_Nava_Nava_Sucha_Yaar___New_Punjabi_Song(128k).m4a"
},
{
	name: "Shipping Lanes",
	artist: "Chad Crouch",
	image: "Arvind.jpg",
	path: "Pagal_Hai_Mai_Kuch_Karna_Java___Ishqan_De_Rog___Deep_Chambal_New_Punjabi_Song_Latest_Punjabi_Songs(128k).m4a",
},
];
