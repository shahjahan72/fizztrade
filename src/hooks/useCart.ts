import { useState } from 'react'

export default function useCart(){
  const [items, setItems] = useState<any[]>([])
  function add(item: any){ setItems(s => [...s, item]) }
  function remove(index: number){ setItems(s => s.filter((_, i) => i !== index)) }
  return { items, add, remove }
}
