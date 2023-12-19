import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import styles from "./my_page.module.css";
import MyListBox from "../../components/myPageListBox/myPageListBox";
import instance from "../login-page/api";

function MyPage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [myList, setMyList] = useState([]);
  const requestMyList = async () => {
    try {
      const response = await instance.get(`/directory?userId=${user.userId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  const fetchData = async () => {
    try {
      const data = await requestMyList();
      setMyList(data);
      console.log(myList);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        userId: "11",
        userName: "푸르미",
        userEmail: "poorm@poormfriends.com",
      }), // test value
    );
    fetchData();
    console.log(myList);
  }, []);
  const list = [
    { userId: "11", problemName: "problem1", level: "lv1", index: 1 },
    { userId: "12", problemName: "problem2", level: "lv2", index: 2 },
  ];
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.user_info}>
          <div>
            {user.profileImage ? (
              <img
                className={styles.user_profile}
                src={user.profileImage}
                alt="user-profile"
              />
            ) : (
              <img
                className={styles.user_profile}
                src="https://avatars.githubusercontent.com/u/100774811?v=4"
                alt="user-profile"
              />
            )}
          </div>
          <div className={styles.user_text}>
            <h1>{user ? user.userName : "userName"}</h1>
            <p>{user ? user.userEmail : "userEmail"}</p>
          </div>
        </div>
        <div className={styles.problem_list}>
          {myList.map(item => (
            <MyListBox
              listName={item.directoryName}
              listInfo={item.problemList.map(i => i.problemTitle)}
            />
          ))}
          <MyListBox listName="list 1" listInfo={list} />
          <MyListBox listName="list 1" listInfo={list} />
        </div>
      </div>
      <footer className={styles.footer}>
        <h2>Poorm Friends</h2>
        <p>Copyright © 2023 GoormFreinds | All Rights Reserved </p>
      </footer>
    </>
  );
}

export default MyPage;
