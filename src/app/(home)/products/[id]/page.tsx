export default function ProductDetailPage({ params }: { params: { id: string } }){
  return <div className="p-8">Product detail for {params.id}</div>
}
