import React from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);

// App -> Parenet -> Child -> Button 으로 전달
// 중간 컴포넌트들이 쓸데없이 props를 계속 전달해야 함 -> props drilling 문제
// createContext 사용하면
// App -> (Context) -> Button 으로 중간단계를 건너뛰고 원하는 컴포넌트에 데이터 사용

//context 생성 -> provider 설정하고 -> usecontext 사용
// 실제 쓰는곳 -> 로그인상태 저장 , 다크모드/테마 , 다국어 ,쇼핑몰(장바구니 데이터)
