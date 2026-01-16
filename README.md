# JanReport – Civil Issue Reporting Platform

JanReport is a full-stack web application that enables citizens to report civic issues and track their resolution in a transparent and structured manner. The platform connects citizens, administrators, and elected representatives (MLA/MP) through role-based dashboards to improve accountability and response efficiency.

## Key Features

- Citizen issue reporting with location and image support
- Admin verification and issue validation workflow
- MLA/MP dashboard for approvals and monitoring
- Real-time issue status tracking (Pending | In Progress | Resolved)
- Community voting for issue prioritization

## Tech Stack

### Frontend
- React (Vite)
- JavaScript, HTML, CSS, Bootstrap
- React Router DOM
- Axios
- Leaflet / React-Leaflet (for maps and location)

### Backend
- Java 17
- Spring Boot (REST APIs)
- Spring Security with JWT Authentication

### Database
- MongoDB

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) & **npm** (or pnpm)
- **Java Development Kit (JDK)** 17
- **Maven** (optional, as `mvnw` wrapper is included)

## Configuration & Setup

###  Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies and build the project:
    ```bash
    ./mvnw clean install
    ```
    *(On Windows, use `mvnw.cmd clean install`)*
3.  Run the application:
    ```bash
    ./mvnw spring-boot:run
    ```
    Or if you have Maven installed globally:
    ```bash
    mvn spring-boot:run
    ```
    The backend server will start on `http://localhost:8080`.

### Frontend Setup

Each dashboard runs independently.

Example (User Dashboard):

1.  Open a new terminal and navigate to the frontend directory:
    ```bash
    cd frontend/janreport-user
    ```
2.  Install dependencies:
    ```bash
    npm install
    # OR if you use pnpm
    pnpm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

Repeat the same steps for:

- frontend/janreport-admin

- frontend/janreport-mla

Frontend runs on: 

 The frontend will be available at `http://localhost:5173` (or the port shown in the terminal).


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.