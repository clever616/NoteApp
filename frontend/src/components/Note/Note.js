import { connect } from 'react-redux'
import { deleteNote } from '../../actions/notes'
import './Note.css'

const Note = ({ note, deleteNote }) => {
    let created_at = new Date(note.created_at).toDateString().split(' ')

    created_at = `${created_at[2]} ${created_at[1]} ${created_at[3]}`
    
    return (
        <div className="note">
            <time>{created_at}</time>
            <h3>{note.title}</h3>
            <p>{note.desc.length > 40 ? note.desc.substring(0, 40) + "..." : note.desc}</p>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (id) => dispatch(deleteNote(id))
    }
}

export default connect(null, mapDispatchToProps)(Note)