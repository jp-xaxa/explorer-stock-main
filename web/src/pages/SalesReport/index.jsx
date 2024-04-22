import { useEffect } from "react"
import { Container } from "./styles"
import { api } from "../../services/api"

export function SalesReport() {
  useEffect(() => {
    api.get("/sales", { withCredentials: true }).then((response) => {})
  }, [])

  return (
    <Container>
      <h1>Relatório de Vendas</h1>
    </Container>
  )
}
