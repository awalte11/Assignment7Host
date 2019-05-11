

/**
 * Task data class
 * number ID: holds ID
 * Date dateCreated: date created
 * String description: user created description
 * boolean isComplete
 * Date dateCompleted
 */
export class Task {
    id: string;
    dateCreated: Date;
    description: string;
    isComplete: boolean;
    dateCompleted: Date;

    /**
     * Constructor makes the task
     * @param number id number, supplied by service
     * @param description description supplied by user
     */
    constructor(id: string, description: string) {
        this.id = id;
        this.description = description;
        this.isComplete = false;
        this.dateCreated = new Date();
        this.dateCompleted = null;
    }

}
