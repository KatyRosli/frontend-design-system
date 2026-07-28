import {
  spacingTokens,
} from "./spacing.constants";


export default function Spacing() {

  return (

    <div className="space-y-8">


      {spacingTokens.map((token) => (

        <div
          key={token.name}
          className="
            space-y-3
          "
        >


          <div className="
            flex
            items-center
            gap-4
          ">


            <div
              className={`
                ${token.className}
                bg-primary
                rounded-md
              `}
            >

              <div
                className="
                  size-8
                  bg-primary
                  rounded-md
                "
              />

            </div>


            <div>

              <p className="
                font-medium
              ">
                {token.name}
              </p>


              <p className="
                text-sm
                text-text-secondary
              ">
                {token.value}
              </p>


            </div>


          </div>


          <p className="
            text-sm
            text-text-secondary
          ">
            {token.usage}
          </p>


        </div>

      ))}


    </div>

  );
}
