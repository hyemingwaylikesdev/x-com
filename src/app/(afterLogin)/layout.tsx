export default function afterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>로그인 후 레이아웃</div>
      {children}
    </div>
  );
}
