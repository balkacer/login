import Card from "../components/Card";

export default function ({ bgColor = "", title }) {
  return (
    <Card title="Login">
      <h1>hola</h1>
      <div class="card-actions">
        <button class="btn btn-primary">Get Started</button>
        <button class="btn btn-secondary">Get Started</button>
      </div>
    </Card>
  );
}
