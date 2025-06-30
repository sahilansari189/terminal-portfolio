export default function HelpOutput() {
  return (
    <div className="text-green-400 space-y-2 my-4">
      <div className="text-green-300 text-lg">Available Commands:</div>
      <div className="text-sm space-y-1 ml-4">
        <div>
          <span className="text-green-500">whoami</span> - Display user information and profile
        </div>
        <div>
          <span className="text-green-500">cat about.txt</span> - Show brief about section
        </div>
        <div>
          <span className="text-green-500">cat about.txt --full</span> - Show complete about section
        </div>
        <div>
          <span className="text-green-500">cd /home</span> - Navigate to home section
        </div>
        <div>
          <span className="text-green-500">cd /skills</span> - Navigate to skills and technologies
        </div>
        <div>
          <span className="text-green-500">cd /projects</span> - Navigate to featured projects
        </div>
        <div>
          <span className="text-green-500">cd /experience</span> - Navigate to work experience
        </div>
        <div>
          <span className="text-green-500">cd /contact</span> - Navigate to contact information
        </div>
        <div>
          <span className="text-green-500">contact</span> - Quick access to contact section
        </div>
        <div>
          <span className="text-green-500">ls</span> - List directory contents
        </div>
        <div>
          <span className="text-green-500">clear</span> - Clear terminal screen
        </div>
        <div>
          <span className="text-green-500">help</span> - Show this help message
        </div>
      </div>
    </div>
  )
}
