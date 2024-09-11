import { useState } from 'react';

function RRCList({ rrc_info, data, onCreate, onUpdate, onDelete, error}) {
    const [formData, setFormData] = useState({ id: '', content: {APIWellNumber: '', WellTypeCode: '', WellName: ''}});
    const [editingId, setEditingId] = useState(null);

    //This part is confusing
    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (editingId) {
            onUpdate(formData);
            setEditingId(null);
        } else {
            onCreate(formData);
        }
        setFormData({ id: '', content: {APIWellNumber: '', WellTypeCode: '', WellName: ''}});
    };

    const handleEdit = (item) => {
        setEditingId(item[id]);
        setFormData({
            APIWellNumber: item.content.APIWellNumber,
            WellTypeCode: item.content.WellTypeCode,
            WellName: item.content.WellName
        });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setFormData({ id: '', content: {APIWellNumber: '', WellTypeCode: '', WellName: ''}});
    };

    return (
        <div>
            <h2>New {rrc_info}</h2>
            <form onSubmit={handleSubmit}>
                {/* Change this to an API search. I am not going to be creating API entries here */}
                <input
                    type="text"
                    name="name"
                    placeholder="API Well Number"
                    value={formData.content.APIWellNumber}
                    onChange={handleFormChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Well Name"
                    value={formData.content.WellName}
                    onChange={handleFormChange}
                />
                <button type="submit">{editingId ? 'Update' : 'Create'}</button>
                {editingId && <button type="button" onClick={handleCancelEdit}>Cancel</button>}
            </form>
            {error && <div>{error.mesage}</div>}
            <h2>{rrc_info}testtesttest</h2>
            <ul>
                {data.map(item => (
                    <li key={item[id]}>
                        {/* <div>{item[rrc_info].content.WellTypeCode} - {item[rrc_info].content.WellName}</div> */}
                        <div><button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RRCList