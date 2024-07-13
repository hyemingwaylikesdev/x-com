export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <div>홈 레이아웃{children}</div>
    </html>
  );
}
