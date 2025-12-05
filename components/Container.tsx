export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 p-4 lg:p-8 max-w-[1600px] mx-auto w-full">
      {children}
    </div>
  );
}
