// Firebase 설정 파일
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
const firebaseConfig = {
  apiKey: "AIzaSyC-7ERuFYzlD9nOql27yCOQz8IrZ1YJYec",
  authDomain: "dsrouter-3.firebaseapp.com",
  projectId: "dsrouter-3",
  storageBucket: "dsrouter-3.firebasestorage.app",
  messagingSenderId: "815420629951",
  appId: "1:815420629951:web:93aaa515bb2713effc770a",
  measurementId: "G-YMZCQ6Z57Z",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);
export default app;
