import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
import { isTemplateLiteral } from 'typescript';
import { TableElementProps } from '../interfaces'

const TableElement = ({
  className,
  style,
  id,
  children, 
  text ,
  cols,
  ...restProps
}: TableElementProps) => {
  const res = {
    "currentPage":1,
    "data":[
       {
          "id":"1468839776986599424",
          "collection_title":"SẢN PHẨM MỚI",
          "uri":"san-pham-moi",
          "create_at":"2021-12-09 14:07:47",
          "url_media":"http://testing.poloman.vn/1428355432291766272/images/vi/desk/collection/san-pham-moi1468851353911562240.jpeg",
          "enable":true
       },
       {
          "id":"1468834142610264064",
          "collection_title":"SẢN PHẨM NỔI BẬT MOBIE",
          "uri":"",
          "create_at":"2021-12-09 13:45:23",
          "url_media":"http://testing.poloman.vn/1428355432291766272/images/vi/desk/collection/1468833526123073536.jpegsan-pham-noi-bat-mobie.jpeg",
          "enable":true
       },
       {
          "id":"1468806396882456576",
          "collection_title":"SẢN PHẨM MỚI",
          "uri":"",
          "create_at":"2021-12-09 11:55:08",
          "url_media":"http://testing.poloman.vn/1428355432291766272/images/vi/desk/collection/1468801052202504192.jpegsan-pham-moi.jpeg",
          "enable":true
       },
       {
          "id":"1468786042554290176",
          "collection_title":"T-SHIRT \u0026 BOXER",
          "uri":"t-shirt",
          "create_at":"2021-12-09 10:34:15",
          "url_media":"http://testing.poloman.vn/1428355432291766272/images/vi/desk/collection/1468786020110569472.jpegt-shirt-and-boxer.jpeg",
          "enable":true
       },
       {
          "id":"1468465421559533568",
          "collection_title":"ORIGINAL POLO",
          "uri":"original-polo",
          "create_at":"2021-12-08 13:20:13",
          "url_media":"http://testing.poloman.vn/1428355432291766272/images/vi/desk/collection/original-polo1468785076614467584.jpeg",
          "enable":true
       },
       {
          "id":"1465944986716475392",
          "collection_title":"PHÙ HỢP VỚI BẠN",
          "uri":"",
          "create_at":"2021-12-01 14:24:55",
          "url_media":"http://testing.poloman.vn/1428355432291766272/images/vi/desk/collection/1465944978260758528.jpegphu-hop-voi-ban.jpeg",
          "enable":true
       },
       {
          "id":"1465665270503706624",
          "collection_title":"ƯU ĐÃI CHO BẠN",
          "uri":"",
          "create_at":"2021-11-30 19:53:25",
          "url_media":"http://testing.poloman.vn/1428355432291766272/images/vi/desk/collection/1465664738355580928.jpeguu-dai-cho-ban.jpeg",
          "enable":true
       },
       {
          "id":"1465658063502446592",
          "collection_title":"SẢN PHẨM NỔI BẬT",
          "uri":"san-pham-noi-bat",
          "create_at":"2021-11-30 19:24:47",
          "url_media":"http://testing.poloman.vn/1428355432291766272/images/vi/desk/collection/san-pham-noi-bat1468572383160832000.jpeg",
          "enable":true
       },
       {
          "id":"1445766626350731264",
          "collection_title":"Mùa siêu sale",
          "uri":"mua-sieu-sale",
          "create_at":"2021-10-06 15:03:19",
          "url_media":"",
          "enable":true
       },
       {
          "id":"1444727917966790656",
          "collection_title":"NEW COLLECTION POLO",
          "uri":"ao-polo-premium",
          "create_at":"2021-10-03 18:15:52",
          "url_media":"http://testing.poloman.vn/1428355432291766272/images/vi/desk/collection/new-collection-polo1468830057182007296.jpeg",
          "enable":true
       }
    ],
    "message":"Sucess",
    "status":200,
    "totalCount":21
 };
 const data = res.data;
  var header = cols.map((item, idx) => {
    return(
      <Th>{item.label}</Th>
    )
    })

    var body = data.map((item, idx) => {

      var col = cols.map((item1, idx1) => {   
        const index:keyof typeof item = item1.key          
        return(
          <Td>{item[index]}</Td>
        )
      })

      return(
        <Tr className="text-dark">
          {col}          
        </Tr>
      )
      })

 

  return (
    <div className={'min-container'}>
      <div className={'table-header pb-3'}></div>
      <div className={'table-content'}></div>
      <Table variant='simple'>
      
      <Thead>
        <Tr>          
          {header}
        </Tr>
      </Thead>
      <Tbody>
        {body}
      </Tbody>
    </Table>
  </div>
  )
}

export default TableElement
