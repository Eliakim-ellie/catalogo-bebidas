import { useAppStore } from "../stores/useAppStore"

export default function IndexPage() {
  useAppStore((state) => state.categories);
  return (
    <>
      <h1>Index</h1>
    </>
  )
}
