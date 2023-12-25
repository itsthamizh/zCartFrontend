import TopBar from '../topBar/TopBar';

export default function LoginLayout({ children }) {
    return (
      <div className="login-layout">
        <TopBar />
        {children}
      </div>
    );
  }
