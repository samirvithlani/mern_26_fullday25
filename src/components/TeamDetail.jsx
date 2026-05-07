import React from "react";
import { useParams } from "react-router-dom";

export const TeamDetail = () => {
  //url data->
  //<Route path = "/teamdetail/:name" element = {<TeamDetail/>}></Route>
  //const name = useParams().name

  //<Route path = "/teamdetail/:id" element = {<TeamDetail/>}></Route>
  const id = useParams().id; //-eg 1 --5

  const teamList = [
    {
      id: 1,
      name: "Royal Challengers Bengaluru",
      shortName: "RCB",
      captain: "Rajat Patidar",
      coach: "Andy Flower",
      homeGround: "M. Chinnaswamy Stadium, Bengaluru",
      trophies: 1,
      trophyYears: [2025],
      owner: "United Spirits",
      primaryColor: "Red & Black",
      founded: 2008,
      bestPlayer: "Virat Kohli",
      slogan: "Ee Sala Cup Namdu",
    },
    {
      id: 2,
      name: "Punjab Kings",
      shortName: "PBKS",
      captain: "Shreyas Iyer",
      coach: "Ricky Ponting",
      homeGround: "PCA Stadium, Mohali",
      trophies: 0,
      trophyYears: [],
      owner: "Preity Zinta & Group",
      primaryColor: "Red",
      founded: 2008,
      bestPlayer: "Arshdeep Singh",
      slogan: "Sadda Punjab",
    },
    {
      id: 3,
      name: "Gujarat Titans",
      shortName: "GT",
      captain: "Shubman Gill",
      coach: "Ashish Nehra",
      homeGround: "Narendra Modi Stadium, Ahmedabad",
      trophies: 1,
      trophyYears: [2022],
      owner: "CVC Capital Partners",
      primaryColor: "Navy Blue",
      founded: 2022,
      bestPlayer: "Shubman Gill",
      slogan: "Aava De",
    },
    {
      id: 4,
      name: "Sunrisers Hyderabad",
      shortName: "SRH",
      captain: "Pat Cummins",
      coach: "Daniel Vettori",
      homeGround: "Rajiv Gandhi International Stadium, Hyderabad",
      trophies: 1,
      trophyYears: [2016],
      owner: "Sun TV Network",
      primaryColor: "Orange",
      founded: 2013,
      bestPlayer: "Heinrich Klaasen",
      slogan: "Orange Army",
    },
    {
      id: 5,
      name: "Chennai Super Kings",
      shortName: "CSK",
      captain: "Ruturaj Gaikwad",
      coach: "Stephen Fleming",
      homeGround: "M.A. Chidambaram Stadium, Chennai",
      trophies: 5,
      trophyYears: [2010, 2011, 2018, 2021, 2023],
      owner: "India Cements",
      primaryColor: "Yellow",
      founded: 2008,
      bestPlayer: "MS Dhoni",
      slogan: "Whistle Podu",
    },
    {
      id: 6,
      name: "Mumbai Indians",
      shortName: "MI",
      captain: "Hardik Pandya",
      coach: "Mahela Jayawardene",
      homeGround: "Wankhede Stadium, Mumbai",
      trophies: 5,
      trophyYears: [2013, 2015, 2017, 2019, 2020],
      owner: "Reliance Industries",
      primaryColor: "Blue",
      founded: 2008,
      bestPlayer: "Jasprit Bumrah",
      slogan: "Duniya Hila Denge",
    },
    {
      id: 7,
      name: "Kolkata Knight Riders",
      shortName: "KKR",
      captain: "Ajinkya Rahane",
      coach: "Abhishek Nayar",
      homeGround: "Eden Gardens, Kolkata",
      trophies: 3,
      trophyYears: [2012, 2014, 2024],
      owner: "Shah Rukh Khan Group",
      primaryColor: "Purple & Gold",
      founded: 2008,
      bestPlayer: "Sunil Narine",
      slogan: "Korbo Lorbo Jeetbo",
    },
    {
      id: 8,
      name: "Delhi Capitals",
      shortName: "DC",
      captain: "Axar Patel",
      coach: "Hemang Badani",
      homeGround: "Arun Jaitley Stadium, Delhi",
      trophies: 0,
      trophyYears: [],
      owner: "JSW & GMR Group",
      primaryColor: "Blue & Red",
      founded: 2008,
      bestPlayer: "Kuldeep Yadav",
      slogan: "Yeh Hai Nayi Dilli",
    },
    {
      id: 9,
      name: "Lucknow Super Giants",
      shortName: "LSG",
      captain: "Rishabh Pant",
      coach: "Justin Langer",
      homeGround: "Ekana Stadium, Lucknow",
      trophies: 0,
      trophyYears: [],
      owner: "RPSG Group",
      primaryColor: "Sky Blue",
      founded: 2022,
      bestPlayer: "Nicholas Pooran",
      slogan: "Ab Apni Baari Hai",
    },
    {
      id: 10,
      name: "Rajasthan Royals",
      shortName: "RR",
      captain: "Riyan Parag",
      coach: "Kumar Sangakkara",
      homeGround: "Sawai Mansingh Stadium, Jaipur",
      trophies: 1,
      trophyYears: [2008],
      owner: "Royal Multisport",
      primaryColor: "Pink & Blue",
      founded: 2008,
      bestPlayer: "Yashasvi Jaiswal",
      slogan: "Halla Bol",
    },
  ];

  const foundTeam = teamList.find((t)=>t.id == id) //1 ==1

  return (
    <div style={{ textAlign: "center" }}>
      <h1>TEAM DETAIL of {id}</h1>
      <h1>Name = {foundTeam.name}</h1>
      <h2>ShortName = {foundTeam.shortName}</h2>
    </div>
  );
};
