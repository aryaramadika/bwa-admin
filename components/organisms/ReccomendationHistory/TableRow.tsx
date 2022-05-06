import Link from 'next/link';
import NumberFormat from "react-number-format"

import cx from 'classnames'
interface TableRowProps{
    recommendation : string;
    diagnosis: string;
    // price:number;
    date:Date;
    status:string;
}
export default function TableRow(props:TableRowProps) {
    const{recommendation,diagnosis,date,status}=props;
    const statusClass=cx({
        'float-start icon-status':true,
        'pending':status==='pending',
        'success':status==='success',
        'failed':status==='failed'

    })
    return (
        <>
        <tr className="align-middle">
        <th scope="row">
            {/* <img className="float-start me-3 mb-lg-0 mb-3" src={`/img/${image}.png`}
                width={80} height={60} alt="game thumb"/> */}
            <div className="game-title-header">
                <p className="game-title fw-medium text-start color-palette-1 m-0">{recommendation}</p>
                
            </div>
        </th>
     <td>
         <p className="game-title fw-medium text-start color-palette-2 m-0">
             {diagnosis}
             </p>
    </td>
        <td>
            
            <p className="fw-medium text-start color-palette-1 m-0">
            {date}</p>
        </td>
        <td>
        <Link 
        href={`/`}>
          <a
            className="btn btn-status rounded-pill text-sm"
          >
            Details

          </a>
        </Link>
            {/* <div>
                <span className={statusClass}></span>
                <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                    {status}</p>
            </div> */}
        </td>
        <td>
       
      </td>
    </tr>

        </>
    )
}
