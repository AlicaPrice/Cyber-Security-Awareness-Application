import React from "react";

function SectionOne() {
  return (
    <section className="relative bg-slate-400 ">
      <div className="absolute  left-0 right-0 bottom-0 m-auto w-px p-px h-20  translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <br></br>
            <h2 className="h2 text-white mb-4">Is your password safe?</h2>
            <p className="text-xl bg-text-justify text-white">
              Having a strong password is one of the best things you can do to
              improve your cyber security. Your passwords ideally should follow
              the criteria below.
            </p>
            <ol className="text-xl text-left text-white">
              <br></br>
              <li>
                •&nbsp;Use a combination of letters, numbers and special
                characters
              </li>
              <li>
                •&nbsp;Do not assume substitutions for letters with symbols and
                numbers will make a generic password safer
              </li>
              <li>
                •&nbsp;Avoid relying on sequences of characters (e.g. 3456)
              </li>
              <li>•&nbsp;Make your password at least 8 characters long </li>
              <li>
                •&nbsp;Do not used easily guessed words, such as your pet's name
              </li>
            </ol>
            <br></br>
            <p className="text-xl text-justify text-white">
              It's important to note that reusing passwords on multiple websites
              is <strong>strongly discouraged</strong>. If one of your accounts
              is compromised and other accounts linked to you also share this
              password, you risk those being compromised also.
            </p>
            <br></br>
            <br></br>
            <p className="text-xl text-white">
              Want to test out your password?{" "}
              <strong>
                {" "}
                <a href="https://www.passwordmonster.com/">PasswordMonster</a>
              </strong>{" "}
              is an online tool that shows you how long it would take for
              someone to crack your password!
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"></div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;