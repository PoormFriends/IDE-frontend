import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../../components/header/Header";
import styles from "./my_page.module.css";
import MyListBox from "../../components/myPageListBox/myPageListBox";
import instance from "../login-page/api";
import Footer from "../../components/footer/Footer";

function MyPage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [myList, setMyList] = useState([]);
  const [modalContents, setModalContents] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
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
      console.log("data:", data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("mylist: ", myList);
  }, []);

  const handleClick = value => {
    setModalContents(value);
    setIsOpenModal(true);
  };

  const { userId } = JSON.parse(localStorage.getItem("user"));
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <div className={styles.user_container}>
          <NavLink to="/" className={styles.link}>
            &lt; 문제 목록으로 가기
          </NavLink>
          <div className={styles.user_info}>
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
            <div className={styles.user_text}>
              <h1 className={styles.user_name}>{user ? user.name : "이름"}</h1>
              <p className={styles.user_email}>{user ? user.email : "Email"}</p>
            </div>
          </div>
          <h4 className={styles.mylists_label}>마이리스트</h4>
          <p className={styles.mylists_description}>
            마이리스트는 최대 3개까지 보입니다. 자세히 보시려면 마이리스트를
            클릭하세요
          </p>
          <div className={styles.mylists}>
            {myList.map(item => (
              <MyListBox
                key={item.directoryId}
                listName={item.directoryName}
                listInfo={item.problemList}
                onOpenModal={handleClick}
              />
            ))}
          </div>
        </div>
        <div className={styles.detail_container}>
          {isOpenModal || <p>자세히 보시려면 마이리스트를 클릭하세요</p>}
          {isOpenModal && (
            <div className={styles.modal}>
              <h4 className={styles.title}>{modalContents.listName}</h4>
              <div className={styles.list_container}>
                {modalContents.listInfo.map(item => (
                  <div
                    className={styles.itemContainer}
                    key={item.directoryProblemId}
                  >
                    <p className={styles.problemTitle}>
                      <Link
                        className={styles.problem_link}
                        to={`/solve/${userId}/${item.problemNum}`}
                      >
                        {item.problemTitle}
                      </Link>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyPage;
