'use client';

import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-4rem)]">
      {/* 로고 */}
      <Image
        src="/logo.png"
        alt="혜택모아 로고"
        width={180}
        height={180}
        className="mb-6"
        priority
      />
      {/* 구글 로그인 박스 */}
      <div className="bg-white  rounded-xl shadow-lg border border-gray-300 p-8 w-full max-w-sm flex flex-col items-center transition-colors duration-200">
        <h1 className="text-2xl font-bold text-gray-800  mb-6">로그인</h1>
        
        {/* 구글 로그인 버튼 */}
        <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300  rounded-lg shadow-sm flex items-center justify-center mb-4 transition duration-200">
          <Image
            src="/assets/icons/google-icon.svg"
            alt="Google"
            width={20}
            height={20}
            className="mr-3"
          />
          Google로 로그인
        </button>
        
        {/* 구분선 */}
        <div className="w-full flex items-center mb-4">
          <div className="flex-1 border-t border-gray-300 "></div>
          <span className="px-3 text-gray-500 text-sm">또는</span>
          <div className="flex-1 border-t border-gray-300 "></div>
        </div>
        
        {/* 기존 로그인 폼 */}
        <div className="relative w-full mb-3">
          <input
            type="email"
            placeholder="이메일"
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900  placeholder-gray-500"
          />
          <Image 
            src="/assets/icons/user-icon.svg" 
            alt="user" 
            width={20} 
            height={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2" 
          />
        </div>
        <div className="relative w-full mb-4">
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white  text-gray-900  placeholder-gray-500"
          />
          <Image 
            src="/assets/icons/password-icon.svg" 
            alt="password" 
            width={20} 
            height={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2" 
          />
        </div>
        <button className="w-full bg-gradient-to-r from-[#53C8A7] to-[#2B48CA] hover:from-[#2d7a3a] hover:to-[#3f42c7] text-white font-bold py-3 px-4 rounded-lg transition duration-200">
          로그인
        </button>
        
        {/* 추가 링크들 */}
        <div className="w-full mt-6 text-center">
          <a href="#" className="text-blue-600  hover:text-blue-800  text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <div className="w-full mt-2 text-center">
          <span className="text-gray-600 text-sm">계정이 없으신가요? </span>
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">회원가입</a>
        </div>
      </div>
    </div>
  );
}