import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>TASK</Form.Label>
          <Form.Control type="text" placeholder="Enter Task..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>DATE</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <div>
          <Button variant="primary w-25" type="submit">
            save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
