import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { getReadBooks } from '../utils/storage';

const Chart = () => {

    const [bookData, setbookData] = useState([]);

    const books = getReadBooks();
    // console.log(books);

    // const { bookName, totalPages } = books;

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    useEffect(() => {
        const bookInfo = books.map(book => {
            const data = {
                name: book.bookName,
                pages: book.totalPages,
            }
            return data;
        })

        setbookData(bookInfo);
        // setPages(books.map(book => book.totalPages));
    }, []);


    console.log(bookData);

    const data = bookData;


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        // eslint-disable-next-line react/prop-types
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;