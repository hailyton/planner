import Button from './button';

const Navbar = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <nav>
        <ul className="flex">
          <li>
            <Button>Sign in</Button>
          </li>
          <li>
            <Button>Sign up</Button>
          </li>
          <li>
            <Button>Log in </Button>
          </li>
          <li>
            <Button>Log up</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
