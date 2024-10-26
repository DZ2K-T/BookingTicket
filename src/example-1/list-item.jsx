import Item from "./item";

export default function Listitem() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-5">
        <Item />
        <Item />
        <Item />
        <Item />
    </div>
  )
}
