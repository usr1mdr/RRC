import {useState, useEffect } from 'react';
import RRCList from './RRCList';

const term = "RRCMain"

function RRCMain() {
    const [data, setData] = useState([]);
    const [maxId, setMaxId] = useState(0);

useEffect(() => {
        fetchRRCData();
    }, []);

    const fetchRRCData = () => {
        // const RRCData = []
         const RRCData = [{'id': 0, 'content': {'APIWellNumber': '12032016500', 'WellTypeCode': 'E', 'WellName': '  001', 'WellNameSuffix': 'ST00BP00', 'CompanyName': 'Exxon Mobil Corporation', 'StatusDate': '3/9/1993', 'StatusCode': 'COM', 'FieldName': 'WILD', 'SurfaceLeaseNumber': 'S00538', 'SurfaceArea': 'MO', 'SurfaceBlock': '  827', 'BottomLeaseNumber': 'S00538', 'BottomArea': 'MO', 'BottomBlock': '  827', 'SpudDate': '9/24/1984', 'TotalDepthDate': '3/10/1985', 'BHTotalMD(feet)': '21678'}}]
        //  const blah = []
        //  [{'id': '0', 'content': {'APIWellNumber': '12032016500', 'WellTypeCode': 'E', 'WellName': '  001', 'WellNameSuffix': 'ST00BP00', 'CompanyName': 'Exxon Mobil Corporation', 'StatusDate': '3/9/1993', 'StatusCode': 'COM', 'FieldName': 'WILD', 'SurfaceLeaseNumber': 'S00538', 'SurfaceArea': 'MO', 'SurfaceBlock': '  827', 'BottomLeaseNumber': 'S00538', 'BottomArea': 'MO', 'BottomBlock': '  827', 'SpudDate': '9/24/1984', 'TotalDepthDate': '3/10/1985', 'BHTotalMD(feet)': '21678'}}]

        //    {'id': 0, 'content': {'APIWellNumber': 12032016500, 'WellTypeCode': 'E', 'WellName': '  001', 'WellNameSuffix': 'ST00BP00', 'CompanyName': 'Exxon Mobil Corporation', 'StatusDate': '3/9/1993', 'StatusCode': 'COM', 'FieldName': 'WILD', 'SurfaceLeaseNumber': 'S00538', 'SurfaceArea': 'MO', 'SurfaceBlock': '  827', 'BottomLeaseNumber': 'S00538', 'BottomArea': 'MO', 'BottomBlock': '  827', 'SpudDate': '9/24/1984', 'TotalDepthDate': '3/10/1985', 'BHTotalMD(feet)': '21678'}}, {'id': 1, 'content': {'APIWellNumber': 12032027100, 'WellTypeCode': 'E', 'WellName': '  001', 'WellNameSuffix': 'ST00BP00', 'CompanyName': 'Exxon Mobil Corporation', 'StatusDate': '3/7/1993', 'StatusCode': 'COM', 'FieldName': 'WILD', 'SurfaceLeaseNumber': 'S00538', 'SurfaceArea': 'MO', 'SurfaceBlock': '  827', 'BottomLeaseNumber': 'S00539', 'BottomArea': 'MO', 'BottomBlock': '  828', 'SpudDate': '11/27/1991', 'TotalDepthDate': '4/27/1992', 'BHTotalMD(feet)': '22646'}}, {'id': 2, 'content': {'APIWellNumber': 12032029300, 'WellTypeCode': 'E', 'WellName': '  002', 'WellNameSuffix': 'ST00BP00', 'CompanyName': 'Exxon Mobil Corporation', 'StatusDate': '9/10/2002', 'StatusCode': 'COM', 'FieldName': 'WILD', 'SurfaceLeaseNumber': 'S00538', 'SurfaceArea': 'MO', 'SurfaceBlock': '  827', 'BottomLeaseNumber': 'S00538', 'BottomArea': 'MO', 'BottomBlock': '  827', 'SpudDate': '3/28/2002', 'TotalDepthDate': '7/31/2002', 'BHTotalMD(feet)': '22160'}}, {'id': 3, 'content': {'APIWellNumber': 12032030900, 'WellTypeCode': 'E', 'WellName': '  003', 'WellNameSuffix': 'ST00BP00', 'CompanyName': 'Exxon Mobil Corporation', 'StatusDate': '5/8/2009', 'StatusCode': 'COM', 'FieldName': 'WILD', 'SurfaceLeaseNumber': 'S00538', 'SurfaceArea': 'MO', 'SurfaceBlock': '  827', 'BottomLeaseNumber': 'S00538', 'BottomArea': 'MO', 'BottomBlock': '  827', 'SpudDate': '1/2/2009', 'TotalDepthDate': '5/8/2009', 'BHTotalMD(feet)': '21711'}}, {'id': 4, 'content': {'APIWellNumber': 170750244200, 'WellTypeCode': 'E', 'WellName': '  002', 'WellNameSuffix': 'ST00BP00', 'CompanyName': 'Chevron U.S.A. Inc.', 'StatusDate': '9/15/1997', 'StatusCode': 'PA', 'FieldName': 'WD027', 'SurfaceLeaseNumber': 'S00192', 'SurfaceArea': 'WD', 'SurfaceBlock': '   24', 'BottomLeaseNumber': 'S00192', 'BottomArea': 'WD', 'BottomBlock': '   24', 'SpudDate': '7/15/1960', 'TotalDepthDate': '8/1/1960', 'BHTotalMD(feet)': '15653'}}
        // ]
        setData(RRCData);
        setMaxId(Math.max(...RRCData.map(rrc => rrc.id)));
    };

    //this code iterates id's from the previous example.
    const handleCreate = (item) => {
        const newItem = { ...item, id: data.length + 1};
        setData([...data, newItem]);
        setMaxId(maxId + 1);
    };

    const handleUpdate = (item) => {
        const updatedData = data.map(rrc => rrc.id === item.id ? item : rrc);
        setData(updatedData);
    };

    const handleDelete = (id) => {
        const updatedData = data.filter(rrc => rrc.id !== id);
        setData(updatedData);
    };

    return (
        <div>
            <RRCList
            name={term}
            data={data}
            onCreate={handleCreate}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            />
        </div>
    );
}

export default RRCMain