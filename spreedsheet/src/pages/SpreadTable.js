import { CSVLink } from "react-csv"
import { Table, DatePicker, Row, Col, Button } from 'antd';
import { DownloadOutlined, AppstoreAddOutlined, EditOutlined } from '@ant-design/icons';

const columns = [
    {
        title: '',
        dataIndex: 'name',
        key: 'name',
        width: 100,
        fixed: 'left',
    },
    {
        title: '05/08/2023',
        children: [
            {
                title: 'Monday',
                children: [
                    {
                        title: 'Rate',
                        dataIndex: 'rate1',
                        key: 'rate1',
                        width: 60,
                    },
                    {
                        title: 'Hrs',
                        dataIndex: 'hrs1',
                        key: 'hrs1',
                        width: 60,
                    },
                    {
                        title: 'Tips',
                        dataIndex: 'tips1',
                        key: 'tips1',
                        width: 60,
                    },
                ],
            }
        ]
    },
    {
        title: '05/09/2023',
        children: [
            {
                title: 'Tuesday',
                children: [
                    {
                        title: 'Rate',
                        dataIndex: 'rate2',
                        key: 'rate2',
                        width: 60,
                    },
                    {
                        title: 'Hrs',
                        dataIndex: 'hrs2',
                        key: 'hrs',
                        width: 60,
                    },
                    {
                        title: 'Tips',
                        dataIndex: 'tips2',
                        key: 'tips',
                        width: 60,
                    },
                ],
            }
        ]
    },
    {
        title: '05/10/2023',
        children: [
            {
                title: 'Wednesday',
                children: [
                    {
                        title: 'Rate',
                        dataIndex: 'rate3',
                        key: 'rate3',
                        width: 60,
                    },
                    {
                        title: 'Hrs',
                        dataIndex: 'hrs3',
                        key: 'hrs3',
                        width: 60,
                    },
                    {
                        title: 'Tips',
                        dataIndex: 'tips3',
                        key: 'tips3',
                        width: 60,
                    },
                ],
            }
        ]
    },
    {
        title: '05/11/2023',
        children: [
            {
                title: 'Thursday',
                children: [
                    {
                        title: 'Rate',
                        dataIndex: 'rate4',
                        key: 'rate4',
                        width: 60,
                    },
                    {
                        title: 'Hrs',
                        dataIndex: 'hrs4',
                        key: 'hrs4',
                        width: 60,
                    },
                    {
                        title: 'Tips',
                        dataIndex: 'tips4',
                        key: 'tips4',
                        width: 60,
                    },
                ],
            }
        ]
    },
    {
        title: '05/12/2023',
        children: [
            {
                title: 'Friday',
                children: [
                    {
                        title: 'Rate',
                        dataIndex: 'rate5',
                        key: 'rate5',
                        width: 60,
                    },
                    {
                        title: 'Hrs',
                        dataIndex: 'hrs5',
                        key: 'hrs5',
                        width: 60,
                    },
                    {
                        title: 'Tips',
                        dataIndex: 'tips5',
                        key: 'tips5',
                        width: 60,
                    },
                ],
            }
        ]
    },
    {
        title: '05/13/2023',
        children: [
            {
                title: 'Saturday',
                children: [
                    {
                        title: 'Rate',
                        dataIndex: 'rate6',
                        key: 'rate6',
                        width: 60,
                    },
                    {
                        title: 'Hrs',
                        dataIndex: 'hrs6',
                        key: 'hrs6',
                        width: 60,
                    },
                    {
                        title: 'Tips',
                        dataIndex: 'tips6',
                        key: 'tips6',
                        width: 60,
                    },
                ],
            }
        ]
    },
    {
        title: '05/14/2023',
        children: [
            {
                title: 'Sunday',
                children: [
                    {
                        title: 'Rate',
                        dataIndex: 'rate7',
                        key: 'rate7',
                        width: 60,
                    },
                    {
                        title: 'Hrs',
                        dataIndex: 'hrs7',
                        key: 'hrs7',
                        width: 60,
                    },
                    {
                        title: 'Tips',
                        dataIndex: 'tips7',
                        key: 'tips7',
                        width: 60,
                    },
                ],
            }
        ]
    }
];
const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: 'Employee ' + i,
        rate1: 19,
        hrs1: 13,
        tips1: 20,
        rate2: 19,
        hrs2: 14,
        tips2: 20,
        rate3: 19,
        hrs3: 12,
        tips3: 20,
        rate4: 19,
        hrs4: 14,
        tips4: 20,
        rate5: 19,
        hrs5: 15,
        tips5: 20,
        rate6: 19,
        hrs6: 13,
        tips6: 20,
        rate7: 19,
        hrs7: 13,
        tips7: 20
    });
}

const SpreadTable = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <Row style={{ display: "inline-block" }}>
            <Row style={{ margin: "10px", float: 'right' }}>
                <Col >
                    <DatePicker onChange={onChange} picker="week" />
                </Col>
                <Col style={{ marginLeft: '10px' }}>
                    <Button type="primary" shape="round" icon={<AppstoreAddOutlined />}>
                        Add
                    </Button>
                </Col>
                <Col style={{ marginLeft: '10px' }}>
                    <Button type="primary" shape="round" icon={<EditOutlined />}>
                        Edit
                    </Button>
                </Col>
                <Col style={{ marginLeft: '10px' }}>
                    <Button type="primary" shape="round" icon={<DownloadOutlined />}>
                        <CSVLink
                            filename={"Expense_Table.csv"}
                            data={data}
                            className="btn btn-primary"
                        >
                            Export to CSV
                        </CSVLink>
                    </Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                size="middle"
                scroll={{
                    x: 'calc(700px + 50%)',
                }}
            />
        </Row>
    )
};
export default SpreadTable;