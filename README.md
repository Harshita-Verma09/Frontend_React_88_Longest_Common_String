#  Longest Common Prefix Finder

A simple React application to find the longest common prefix among a comma-separated list of strings.

---

##  Features

* **Intuitive Input:** Easily enter strings separated by commas.
* **Live Result:** Get the longest common prefix displayed instantly.
* **Clean UI:** A modern and responsive user interface built with Tailwind CSS.

---

##  How to Use

1.  **Enter Strings:** In the input field, type the strings you want to compare, separated by commas.
    * **Example:** `flower, flow, flight`
2.  **Find Prefix:** Click the "Find Prefix" button.
3.  **View Result:** The longest common prefix will be displayed below the button.

---

## 🛠️ Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Tailwind CSS:** A utility-first CSS framework for rapidly styling the application.

---

## ⚙️ Installation (for Developers)

To set up this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```
    (Replace `<repository-url>` and `<repository-name>` with the actual values if this project is hosted on a platform like GitHub.)

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    This will open the application in your browser at `http://localhost:3000`.

---

## 💡 Algorithm

The `longestCommonPrefix` function works as follows:

1.  **Handle Empty Array:** If the input array of strings is empty, it returns an empty string.
2.  **Sort the Array:** It sorts the array of strings alphabetically. This is a clever optimization because, after sorting, the longest common prefix will always be the common prefix of the *first* and *last* strings in the sorted array.
3.  **Compare First and Last:** It then iterates through the characters of the first string and the last string, comparing them character by character.
4.  **Build Prefix:** As long as the characters match, they are part of the common prefix. The iteration stops at the first mismatch.
5.  **Return Prefix:** Finally, it returns the substring of the first string from index 0 up to the point where the characters matched.

---

