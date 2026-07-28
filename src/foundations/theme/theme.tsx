import {
  themeTokenGroups,
} from "./theme.constants";


export default function Themes() {

  return (
    <div className="space-y-12">


      {themeTokenGroups.map((group) => (

        <section
          key={group.name}
          className="space-y-4"
        >

          <h2 className="
            text-xl
            font-semibold
            font-heading
          ">
            {group.name}
          </h2>


          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
          ">


            {group.tokens.map((token) => (

              <div
                key={token.variable}
                className="
                  border
                  rounded-lg
                  overflow-hidden
                  bg-background
                "
              >

                <div
                  className={`
                    h-20
                    ${token.className}
                  `}
                />


                <div className="
                  p-4
                  space-y-1
                ">

                  <p className="
                    font-medium
                  ">
                    {token.name}
                  </p>


                  <code className="
                    text-sm
                    text-text-secondary
                  ">
                    {token.variable}
                  </code>

                </div>

              </div>

            ))}


          </div>

        </section>

      ))}


    </div>
  );
}
