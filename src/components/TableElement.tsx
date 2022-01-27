import { ITableElementProps } from '../interfaces'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import { useCallback, useEffect, useState } from 'react'
import axios from '../services/axios'
import { Box, Flex } from '@chakra-ui/layout'
import ReactPaginate from 'react-paginate'

const TableElement = ({
  className,
  id,
  urlApi,
  headers,
  canEdit,
  canDelete,
}: ITableElementProps) => {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  const fetchData = useCallback(async () => {
    if (!urlApi) {
      return
    }

    try {
      setLoading(true)
      const data: any = await axios.post(urlApi)

      setData(data.items)
      setTotal(data.total)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }, [urlApi])

  const handlePageClick = (a: any) => {
    console.log(a)
  }

  useEffect(() => {
    if (urlApi) {
      fetchData()
    }
  }, [urlApi, fetchData])

  if (!headers) {
    return ''
  }

  return (
    <Flex direction="column" w="100%">
      <Table className={className} id={id}>
        <Thead>
          <Tr>
            {headers?.map((header, index) => (
              <Th width={header.width} key={index}>
                {header.name}
              </Th>
            ))}
            {canEdit || canDelete ? <Th></Th> : ''}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item: any, index: number) => {
            return (
              <Tr key={index}>
                {headers?.map((header, i) => (
                  <Td key={i}>{item[header.key || '']}</Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      <Flex justify="space-between" mt="10px" padding="10px">
        <Box>Tổng số</Box>
        <ReactPaginate
          nextLabel="next >"
          forcePage={page - 1}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={total}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={undefined}
        />
      </Flex>
    </Flex>
  )
}

export default TableElement
