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
        name: "푸르미",
        email: "poorm@poormfriends.com",
      }), // test value
    );
    localStorage.setItem(
      "problemList",
      JSON.stringify([
        {
          directoryId: 1,
          directoryName: "1번 리스트",
          problemList: [
            { directoryProblemId: 1, problemNum: 1, problemTitle: "1번 문제" },
          ],
        },
        {
          directoryId: 2,
          directoryName: "2번 리스트",
          problemList: [
            { directoryProblemId: 1, problemNum: 1, problemTitle: "1번 문제" },
            {
              directoryProblemId: 2,
              problemNum: 2,
              problemTitle: "2번 문제",
            },
          ],
        }, // test value
      ]),
    );
    // setMyList(JSON.parse(localStorage.getItem("problemList")));
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.user_info}>
          <div>
            {user?.profileImage ? (
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
            <h1>{user ? user.name : "userName"}</h1>
            <p>{user ? user.email : "userEmail"}</p>
          </div>
        </div>
        <div className={styles.problem_list}>
          {myList.map(item => (
            <MyListBox
              listName={item.directoryName}
              listInfo={item.problemList}
            />
          ))}
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
